--- 
title: migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - migrations
  - opensearch
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.migrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_migration"
    values={[
        { label: 'get_migration', value: 'get_migration' },
        { label: 'list_migrations', value: 'list_migrations' }
    ]}
>
<TabItem value="get_migration">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch application associated with the migration. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;3,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the migration job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error details if the migration failed or completed with errors.</td>
</tr>
<tr>
    <td><CopyableCode code="exported_count" /></td>
    <td><code>integer</code></td>
    <td>The number of saved objects exported from the source data source.</td>
</tr>
<tr>
    <td><CopyableCode code="imported_count" /></td>
    <td><code>integer</code></td>
    <td>The number of saved objects successfully imported into the target workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the migration job.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source configuration for the migration, including the data source ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the migration job. Valid values are PENDING, IN_PROGRESS, SUCCEEDED, and FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the migration job was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_migrations">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="migrations" /></td>
    <td><code>array</code></td>
    <td>A list of migration job summaries for the specified application.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use in a subsequent call to retrieve the next set of results.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_migration"><CopyableCode code="get_migration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-migration_id"><code>migration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current status and progress of a migration job, including the number of exported and imported objects and error details if the migration failed.</td>
</tr>
<tr>
    <td><a href="#list_migrations"><CopyableCode code="list_migrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists migration jobs for an Amazon OpenSearch Service application. You can filter results by migration status. Use pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch application to list migrations for.</td>
</tr>
<tr id="parameter-migration_id">
    <td><CopyableCode code="migration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the migration job to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous call to retrieve the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filters the results by migration status. Valid values are PENDING, IN_PROGRESS, SUCCEEDED, and FAILED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_migration"
    values={[
        { label: 'get_migration', value: 'get_migration' },
        { label: 'list_migrations', value: 'list_migrations' }
    ]}
>
<TabItem value="get_migration">

Retrieves the current status and progress of a migration job, including the number of exported and imported objects and error details if the migration failed.

```sql
SELECT
application_id,
created_at,
error,
exported_count,
imported_count,
migration_id,
source,
status,
updated_at
FROM aws.opensearch.migrations
WHERE migration_id = '{{ migration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_migrations">

Lists migration jobs for an Amazon OpenSearch Service application. You can filter results by migration status. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
migrations,
next_token
FROM aws.opensearch.migrations
WHERE applicationId = '{{ applicationId }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
