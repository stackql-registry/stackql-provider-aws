--- 
title: kx_changesets
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_changesets
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

Creates, updates, deletes, gets or lists a <code>kx_changesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_changesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_changesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_changeset"
    values={[
        { label: 'get_kx_changeset', value: 'get_kx_changeset' },
        { label: 'list_kx_changesets', value: 'list_kx_changesets' }
    ]}
>
<TabItem value="get_kx_changeset">

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
    <td><CopyableCode code="activeFromTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Beginning time from which the changeset is active. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="changeRequests" /></td>
    <td><code>array</code></td>
    <td>A list of change request objects that are run in order.</td>
</tr>
<tr>
    <td><CopyableCode code="changesetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the changeset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the changeset was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb database. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorInfo" /></td>
    <td><code>object</code></td>
    <td>Provides details in the event of a failed flow, including the error type and the related error message.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the changeset was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the changeset creation process. Pending – Changeset creation is pending. Processing – Changeset creation is running. Failed – Changeset creation has failed. Complete – Changeset creation has succeeded. (PENDING, PROCESSING, FAILED, COMPLETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_changesets">

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
    <td><CopyableCode code="kxChangesets" /></td>
    <td><code>array</code></td>
    <td>A list of changesets for a database.</td>
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
    <td><a href="#get_kx_changeset"><CopyableCode code="get_kx_changeset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-changeset_id"><code>changeset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a kdb changeset.</td>
</tr>
<tr>
    <td><a href="#list_kx_changesets"><CopyableCode code="list_kx_changesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the changesets for a database.</td>
</tr>
<tr>
    <td><a href="#create_kx_changeset"><CopyableCode code="create_kx_changeset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-changeRequests"><code>changeRequests</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests.</td>
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
<tr id="parameter-changeset_id">
    <td><CopyableCode code="changeset_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the changeset for which you want to retrieve data.</td>
</tr>
<tr id="parameter-database_name">
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the kdb database.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the kdb environment.</td>
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
    defaultValue="get_kx_changeset"
    values={[
        { label: 'get_kx_changeset', value: 'get_kx_changeset' },
        { label: 'list_kx_changesets', value: 'list_kx_changesets' }
    ]}
>
<TabItem value="get_kx_changeset">

Returns information about a kdb changeset.

```sql
SELECT
activeFromTimestamp,
changeRequests,
changesetId,
createdTimestamp,
databaseName,
environmentId,
errorInfo,
lastModifiedTimestamp,
status
FROM aws.finspace.kx_changesets
WHERE environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND changeset_id = '{{ changeset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_changesets">

Returns a list of all the changesets for a database.

```sql
SELECT
kxChangesets,
nextToken
FROM aws.finspace.kx_changesets
WHERE environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_kx_changeset"
    values={[
        { label: 'create_kx_changeset', value: 'create_kx_changeset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_changeset">

Creates a changeset for a kdb database. A changeset allows you to add and delete existing files by using an ordered list of change requests.

```sql
INSERT INTO aws.finspace.kx_changesets (
changeRequests,
clientToken,
environment_id,
database_name,
region
)
SELECT 
'{{ changeRequests }}' /* required */,
'{{ clientToken }}' /* required */,
'{{ environment_id }}',
'{{ database_name }}',
'{{ region }}'
RETURNING
changeRequests,
changesetId,
createdTimestamp,
databaseName,
environmentId,
errorInfo,
lastModifiedTimestamp,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_changesets
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_changesets resource.
    - name: database_name
      value: "{{ database_name }}"
      description: Required parameter for the kx_changesets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_changesets resource.
    - name: changeRequests
      value:
        - changeType: "{{ changeType }}"
          s3Path: "{{ s3Path }}"
          dbPath: "{{ dbPath }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
