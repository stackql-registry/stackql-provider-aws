--- 
title: kx_dataviews
hide_title: false
hide_table_of_contents: false
keywords:
  - kx_dataviews
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

Creates, updates, deletes, gets or lists a <code>kx_dataviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="kx_dataviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.kx_dataviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_kx_dataview"
    values={[
        { label: 'get_kx_dataview', value: 'get_kx_dataview' },
        { label: 'list_kx_dataviews', value: 'list_kx_dataviews' }
    ]}
>
<TabItem value="get_kx_dataview">

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
    <td><CopyableCode code="activeVersions" /></td>
    <td><code>array</code></td>
    <td>The current active changeset versions of the database on the given dataview.</td>
</tr>
<tr>
    <td><CopyableCode code="autoUpdate" /></td>
    <td><code>boolean</code></td>
    <td>The option to specify whether you want to apply all the future additions and corrections automatically to the dataview when new changesets are ingested. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the availability zones. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="azMode" /></td>
    <td><code>string</code></td>
    <td>The number of availability zones you want to assign per volume. Currently, FinSpace only supports SINGLE for volumes. This places dataview in a single AZ. (SINGLE, MULTI)</td>
</tr>
<tr>
    <td><CopyableCode code="changesetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the changeset that you want to use to ingest data. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the dataview was created in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database where you created the dataview. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataviewName" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the dataview. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the dataview. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment, from where you want to retrieve the dataview details. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.</td>
</tr>
<tr>
    <td><CopyableCode code="readWrite" /></td>
    <td><code>boolean</code></td>
    <td>Returns True if the dataview is created as writeable and False otherwise.</td>
</tr>
<tr>
    <td><CopyableCode code="segmentConfigurations" /></td>
    <td><code>array</code></td>
    <td>The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of dataview creation. CREATING – The dataview creation is in progress. UPDATING – The dataview is in the process of being updated. ACTIVE – The dataview is active. (CREATING, ACTIVE, UPDATING, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The error message when a failed state occurs. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\_\-\.\s&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_kx_dataviews">

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
    <td><CopyableCode code="kxDataviews" /></td>
    <td><code>array</code></td>
    <td>The list of kdb dataviews that are currently active for the given database.</td>
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
    <td><a href="#get_kx_dataview"><CopyableCode code="get_kx_dataview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-dataview_name"><code>dataview_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of the dataview.</td>
</tr>
<tr>
    <td><a href="#list_kx_dataviews"><CopyableCode code="list_kx_dataviews" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all the dataviews in the database.</td>
</tr>
<tr>
    <td><a href="#create_kx_dataview"><CopyableCode code="create_kx_dataview" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dataviewName"><code>dataviewName</code></a>, <a href="#parameter-azMode"><code>azMode</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters. Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters.</td>
</tr>
<tr>
    <td><a href="#update_kx_dataview"><CopyableCode code="update_kx_dataview" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-dataview_name"><code>dataview_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations</td>
</tr>
<tr>
    <td><a href="#delete_kx_dataview"><CopyableCode code="delete_kx_dataview" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-database_name"><code>database_name</code></a>, <a href="#parameter-dataview_name"><code>dataview_name</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified dataview. Before deleting a dataview, make sure that it is not in use by any cluster.</td>
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
    <td>The name of the database whose dataview you want to delete.</td>
</tr>
<tr id="parameter-dataview_name">
    <td><CopyableCode code="dataview_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataview that you want to delete.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the kdb environment, from where you want to delete the dataview.</td>
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
    defaultValue="get_kx_dataview"
    values={[
        { label: 'get_kx_dataview', value: 'get_kx_dataview' },
        { label: 'list_kx_dataviews', value: 'list_kx_dataviews' }
    ]}
>
<TabItem value="get_kx_dataview">

Retrieves details of the dataview.

```sql
SELECT
activeVersions,
autoUpdate,
availabilityZoneId,
azMode,
changesetId,
createdTimestamp,
databaseName,
dataviewName,
description,
environmentId,
lastModifiedTimestamp,
readWrite,
segmentConfigurations,
status,
statusReason
FROM aws.finspace.kx_dataviews
WHERE environment_id = '{{ environment_id }}' -- required
AND database_name = '{{ database_name }}' -- required
AND dataview_name = '{{ dataview_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_kx_dataviews">

Returns a list of all the dataviews in the database.

```sql
SELECT
kxDataviews,
nextToken
FROM aws.finspace.kx_dataviews
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
    defaultValue="create_kx_dataview"
    values={[
        { label: 'create_kx_dataview', value: 'create_kx_dataview' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_kx_dataview">

Creates a snapshot of kdb database with tiered storage capabilities and a pre-warmed cache, ready for mounting on kdb clusters. Dataviews are only available for clusters running on a scaling group. They are not supported on dedicated clusters.

```sql
INSERT INTO aws.finspace.kx_dataviews (
dataviewName,
azMode,
availabilityZoneId,
changesetId,
segmentConfigurations,
autoUpdate,
readWrite,
description,
tags,
clientToken,
environment_id,
database_name,
region
)
SELECT 
'{{ dataviewName }}' /* required */,
'{{ azMode }}' /* required */,
'{{ availabilityZoneId }}',
'{{ changesetId }}',
'{{ segmentConfigurations }}',
{{ autoUpdate }},
{{ readWrite }},
'{{ description }}',
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ environment_id }}',
'{{ database_name }}',
'{{ region }}'
RETURNING
autoUpdate,
availabilityZoneId,
azMode,
changesetId,
createdTimestamp,
databaseName,
dataviewName,
description,
environmentId,
lastModifiedTimestamp,
readWrite,
segmentConfigurations,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: kx_dataviews
  props:
    - name: environment_id
      value: "{{ environment_id }}"
      description: Required parameter for the kx_dataviews resource.
    - name: database_name
      value: "{{ database_name }}"
      description: Required parameter for the kx_dataviews resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the kx_dataviews resource.
    - name: dataviewName
      value: "{{ dataviewName }}"
    - name: azMode
      value: "{{ azMode }}"
      valid_values: ['SINGLE', 'MULTI']
    - name: availabilityZoneId
      value: "{{ availabilityZoneId }}"
    - name: changesetId
      value: "{{ changesetId }}"
    - name: segmentConfigurations
      value:
        - dbPaths: "{{ dbPaths }}"
          volumeName: "{{ volumeName }}"
          onDemand: {{ onDemand }}
    - name: autoUpdate
      value: {{ autoUpdate }}
    - name: readWrite
      value: {{ readWrite }}
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
    defaultValue="update_kx_dataview"
    values={[
        { label: 'update_kx_dataview', value: 'update_kx_dataview' }
    ]}
>
<TabItem value="update_kx_dataview">

Updates the specified dataview. The dataviews get automatically updated when any new changesets are ingested. Each update of the dataview creates a new version, including changeset details and cache configurations

```sql
UPDATE aws.finspace.kx_dataviews
SET 
description = '{{ description }}',
changesetId = '{{ changesetId }}',
segmentConfigurations = '{{ segmentConfigurations }}',
clientToken = '{{ clientToken }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND database_name = '{{ database_name }}' --required
AND dataview_name = '{{ dataview_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
activeVersions,
autoUpdate,
availabilityZoneId,
azMode,
changesetId,
createdTimestamp,
databaseName,
dataviewName,
description,
environmentId,
lastModifiedTimestamp,
readWrite,
segmentConfigurations,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_kx_dataview"
    values={[
        { label: 'delete_kx_dataview', value: 'delete_kx_dataview' }
    ]}
>
<TabItem value="delete_kx_dataview">

Deletes the specified dataview. Before deleting a dataview, make sure that it is not in use by any cluster.

```sql
DELETE FROM aws.finspace.kx_dataviews
WHERE environment_id = '{{ environment_id }}' --required
AND database_name = '{{ database_name }}' --required
AND dataview_name = '{{ dataview_name }}' --required
AND clientToken = '{{ clientToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
