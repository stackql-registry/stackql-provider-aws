--- 
title: live_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - live_sources
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>live_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="live_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.live_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_live_source"
    values={[
        { label: 'describe_live_source', value: 'describe_live_source' },
        { label: 'list_live_sources', value: 'list_live_sources' }
    ]}
>
<TabItem value="describe_live_source">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the live source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the live source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpPackageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The VOD source's HTTP package configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the live source was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LiveSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the live source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location associated with the live source.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_live_sources">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the live source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the live source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpPackageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The VOD source's HTTP package configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the live source was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="LiveSourceName" /></td>
    <td><code>string</code></td>
    <td>The name that's used to refer to a live source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the live source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
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
    <td><a href="#describe_live_source"><CopyableCode code="describe_live_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-live_source_name"><code>live_source_name</code></a>, <a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The live source to describe.</td>
</tr>
<tr>
    <td><a href="#list_live_sources"><CopyableCode code="list_live_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the live sources contained in a source location. A source represents a piece of content.</td>
</tr>
<tr>
    <td><a href="#create_live_source"><CopyableCode code="create_live_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-live_source_name"><code>live_source_name</code></a>, <a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpPackageConfigurations"><code>HttpPackageConfigurations</code></a></td>
    <td></td>
    <td>The live source configuration.</td>
</tr>
<tr>
    <td><a href="#update_live_source"><CopyableCode code="update_live_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-live_source_name"><code>live_source_name</code></a>, <a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpPackageConfigurations"><code>HttpPackageConfigurations</code></a></td>
    <td></td>
    <td>Updates a live source's configuration.</td>
</tr>
<tr>
    <td><a href="#delete_live_source"><CopyableCode code="delete_live_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-live_source_name"><code>live_source_name</code></a>, <a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The live source to delete.</td>
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
<tr id="parameter-live_source_name">
    <td><CopyableCode code="live_source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the live source.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_location_name">
    <td><CopyableCode code="source_location_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source location associated with this Live Source.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of live sources that you want MediaTailor to return in response to the current request. If there are more than MaxResults live sources, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListLiveSources request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_live_source"
    values={[
        { label: 'describe_live_source', value: 'describe_live_source' },
        { label: 'list_live_sources', value: 'list_live_sources' }
    ]}
>
<TabItem value="describe_live_source">

The live source to describe.

```sql
SELECT
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
LiveSourceName,
SourceLocationName,
Tags
FROM aws.mediatailor.live_sources
WHERE live_source_name = '{{ live_source_name }}' -- required
AND source_location_name = '{{ source_location_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_live_sources">

Lists the live sources contained in a source location. A source represents a piece of content.

```sql
SELECT
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
LiveSourceName,
SourceLocationName,
Tags
FROM aws.mediatailor.live_sources
WHERE source_location_name = '{{ source_location_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_live_source"
    values={[
        { label: 'create_live_source', value: 'create_live_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_live_source">

The live source configuration.

```sql
INSERT INTO aws.mediatailor.live_sources (
HttpPackageConfigurations,
Tags,
live_source_name,
source_location_name,
region
)
SELECT 
'{{ HttpPackageConfigurations }}' /* required */,
'{{ Tags }}',
'{{ live_source_name }}',
'{{ source_location_name }}',
'{{ region }}'
RETURNING
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
LiveSourceName,
SourceLocationName,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: live_sources
  props:
    - name: live_source_name
      value: "{{ live_source_name }}"
      description: Required parameter for the live_sources resource.
    - name: source_location_name
      value: "{{ source_location_name }}"
      description: Required parameter for the live_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the live_sources resource.
    - name: HttpPackageConfigurations
      description: |
        The VOD source's HTTP package configuration settings.
      value:
        - Path: "{{ Path }}"
          SourceGroup: "{{ SourceGroup }}"
          Type: "{{ Type }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_live_source"
    values={[
        { label: 'update_live_source', value: 'update_live_source' }
    ]}
>
<TabItem value="update_live_source">

Updates a live source's configuration.

```sql
UPDATE aws.mediatailor.live_sources
SET 
HttpPackageConfigurations = '{{ HttpPackageConfigurations }}'
WHERE 
live_source_name = '{{ live_source_name }}' --required
AND source_location_name = '{{ source_location_name }}' --required
AND region = '{{ region }}' --required
AND HttpPackageConfigurations = '{{ HttpPackageConfigurations }}' --required
RETURNING
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
LiveSourceName,
SourceLocationName,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_live_source"
    values={[
        { label: 'delete_live_source', value: 'delete_live_source' }
    ]}
>
<TabItem value="delete_live_source">

The live source to delete.

```sql
DELETE FROM aws.mediatailor.live_sources
WHERE live_source_name = '{{ live_source_name }}' --required
AND source_location_name = '{{ source_location_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
