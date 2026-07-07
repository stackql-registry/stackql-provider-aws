--- 
title: kx_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_databases
  - finspace
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

Creates, updates, deletes, gets or lists a <code>kx_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_database"
    values={[
        { label: 'get_kx_database', value: 'get_kx_database' },
        { label: 'list_kx_databases', value: 'list_kx_databases' }
    ]}
>
<TabItem value="get_kx_database">

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
    <td><CopyableCode code="createdTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the database is created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb database for which the information is retrieved. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastCompletedChangesetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the changeset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the database was modified. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="numBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of bytes in the database.</td>
</tr>
<tr>
    <td><CopyableCode code="numChangesets" /></td>
    <td><code>integer</code></td>
    <td>The total number of changesets in the database.</td>
</tr>
<tr>
    <td><CopyableCode code="numFiles" /></td>
    <td><code>integer</code></td>
    <td>The total number of files in the database.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_databases">

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
    <td><CopyableCode code="kxDatabases" /></td>
    <td><code>array</code></td>
    <td>A list of databases in the kdb environment.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_kx_database"><CopyableCode code="get_kx_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns database information for the specified environment ID.</td>
</tr>
<tr>
    <td><a href="#list_kx_databases"><CopyableCode code="list_kx_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the databases in the kdb environment.</td>
</tr>
<tr>
    <td><a href="#create_kx_database"><CopyableCode code="create_kx_database" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseName"><code>databaseName</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new kdb database in the environment.</td>
</tr>
<tr>
    <td><a href="#update_kx_database"><CopyableCode code="update_kx_database" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates information for the given kdb database.</td>
</tr>
<tr>
    <td><a href="#delete_kx_database"><CopyableCode code="delete_kx_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.</td>
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
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb database that you want to delete.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_kx_database"
    values={[
        { label: 'get_kx_database', value: 'get_kx_database' },
        { label: 'list_kx_databases', value: 'list_kx_databases' }
    ]}
>
<TabItem value="get_kx_database">

Returns database information for the specified environment ID.

```sql
SELECT
createdTimestamp,
databaseArn,
databaseName,
description,
environmentId,
lastCompletedChangesetId,
lastModifiedTimestamp,
numBytes,
numChangesets,
numFiles
FROM aws.finspace.kx_databases
WHERE environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_databases">

Returns a list of all the databases in the kdb environment.

```sql
SELECT
kxDatabases,
nextToken
FROM aws.finspace.kx_databases
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_database"
    values={[
        { label: 'create_kx_database', value: 'create_kx_database' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_database">

Creates a new kdb database in the environment.

```sql
INSERT INTO aws.finspace.kx_databases (
databaseName,
description,
tags,
clientToken,
environment_id,
region
)
SELECT 
'{{ databaseName }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ environment_id }}',
'{{ region }}'
RETURNING
createdTimestamp,
databaseArn,
databaseName,
description,
environmentId,
lastModifiedTimestamp
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_databases
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_databases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_databases resource.
    - name: databaseName
      value: "{{ databaseName }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_kx_database"
    values={[
        { label: 'update_kx_database', value: 'update_kx_database' }
    ]}
>
<TabItem value="update_kx_database">

Updates information for the given kdb database.

```sql
UPDATE aws.finspace.kx_databases
SET 
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND database_name = '{{ database_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
databaseName,
description,
environmentId,
lastModifiedTimestamp;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_database"
    values={[
        { label: 'delete_kx_database', value: 'delete_kx_database' }
    ]}
>
<TabItem value="delete_kx_database">

Deletes the specified database and all of its associated data. This action is irreversible. You must copy any data out of the database before deleting it if the data is to be retained.

```sql
DELETE FROM aws.finspace.kx_databases
WHERE environment_id = '{{ environment_id }}' --required
AND database_name = '{{ database_name }}' --required
AND clientToken = '{{ clientToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
