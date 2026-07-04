-- ==========================================================================
-- GERADOR DE PÁGINAS — schema do Supabase (rodar 1x no SQL Editor do projeto)
-- Mesmo padrão usado no lp-oceandigi: tabela simples + RLS permissivo.
-- A proteção real de acesso é a tela de login do gerador.html (basica), não
-- o RLS. Se quiser travar mais forte depois, é aqui que entra uma policy
-- exigindo um header/JWT em vez de "using (true)".
-- ==========================================================================

create extension if not exists pgcrypto;

create table if not exists paginas_geradas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  config jsonb not null,
  expires_at timestamptz default null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists paginas_geradas_slug_idx on paginas_geradas (slug);

alter table paginas_geradas enable row level security;

drop policy if exists "leitura publica" on paginas_geradas;
create policy "leitura publica" on paginas_geradas
  for select using (true);

drop policy if exists "escrita publica" on paginas_geradas;
create policy "escrita publica" on paginas_geradas
  for insert with check (true);

drop policy if exists "atualizacao publica" on paginas_geradas;
create policy "atualizacao publica" on paginas_geradas
  for update using (true);

drop policy if exists "exclusao publica" on paginas_geradas;
create policy "exclusao publica" on paginas_geradas
  for delete using (true);

-- Mantém updated_at em dia a cada UPDATE.
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists paginas_geradas_set_updated_at on paginas_geradas;
create trigger paginas_geradas_set_updated_at
  before update on paginas_geradas
  for each row execute function set_updated_at();

-- Adiciona a coluna expires_at caso a tabela já tenha sido criada anteriormente
alter table paginas_geradas add column if not exists expires_at timestamptz default null;
