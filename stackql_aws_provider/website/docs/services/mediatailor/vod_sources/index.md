--- 
title: vod_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - vod_sources
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

Creates, updates, deletes, gets or lists a <code>vod_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vod_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.vod_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vod_source"
    values={[
        { label: 'describe_vod_source', value: 'describe_vod_source' },
        { label: 'list_vod_sources', value: 'list_vod_sources' }
    ]}
>
<TabItem value="describe_vod_source">

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
    <td><CopyableCode code="AdBreakOpportunities" /></td>
    <td><code>array</code></td>
    <td>The ad break opportunities within the VOD source.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the VOD source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the VOD source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpPackageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The VOD source's HTTP package configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the VOD source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location associated with the VOD source.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="VodSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the VOD source.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vod_sources">

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
    <td>The ARN for the VOD source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the VOD source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpPackageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The VOD source's HTTP package configuration settings.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the VOD source was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location that the VOD source is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the VOD source. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
<tr>
    <td><CopyableCode code="VodSourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the VOD source.</td>
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
    <td><a href="#describe_vod_source"><CopyableCode code="describe_vod_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-vod_source_name"><code>vod_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about a specific video on demand (VOD) source in a specific source location.</td>
</tr>
<tr>
    <td><a href="#list_vod_sources"><CopyableCode code="list_vod_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the VOD sources contained in a source location. A source represents a piece of content.</td>
</tr>
<tr>
    <td><a href="#create_vod_source"><CopyableCode code="create_vod_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-vod_source_name"><code>vod_source_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpPackageConfigurations"><code>HttpPackageConfigurations</code></a></td>
    <td></td>
    <td>The VOD source configuration parameters.</td>
</tr>
<tr>
    <td><a href="#update_vod_source"><CopyableCode code="update_vod_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-vod_source_name"><code>vod_source_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpPackageConfigurations"><code>HttpPackageConfigurations</code></a></td>
    <td></td>
    <td>Updates a VOD source's configuration.</td>
</tr>
<tr>
    <td><a href="#delete_vod_source"><CopyableCode code="delete_vod_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-vod_source_name"><code>vod_source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The video on demand (VOD) source to delete.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_location_name">
    <td><CopyableCode code="source_location_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source location associated with this VOD Source.</td>
</tr>
<tr id="parameter-vod_source_name">
    <td><CopyableCode code="vod_source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the VOD source.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of VOD sources that you want MediaTailor to return in response to the current request. If there are more than MaxResults VOD sources, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListVodSources request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vod_source"
    values={[
        { label: 'describe_vod_source', value: 'describe_vod_source' },
        { label: 'list_vod_sources', value: 'list_vod_sources' }
    ]}
>
<TabItem value="describe_vod_source">

Provides details about a specific video on demand (VOD) source in a specific source location.

```sql
SELECT
AdBreakOpportunities,
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
SourceLocationName,
Tags,
VodSourceName
FROM aws.mediatailor.vod_sources
WHERE source_location_name = '{{ source_location_name }}' -- required
AND vod_source_name = '{{ vod_source_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vod_sources">

Lists the VOD sources contained in a source location. A source represents a piece of content.

```sql
SELECT
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
SourceLocationName,
Tags,
VodSourceName
FROM aws.mediatailor.vod_sources
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
    defaultValue="create_vod_source"
    values={[
        { label: 'create_vod_source', value: 'create_vod_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vod_source">

The VOD source configuration parameters.

```sql
INSERT INTO aws.mediatailor.vod_sources (
HttpPackageConfigurations,
Tags,
source_location_name,
vod_source_name,
region
)
SELECT 
'{{ HttpPackageConfigurations }}' /* required */,
'{{ Tags }}',
'{{ source_location_name }}',
'{{ vod_source_name }}',
'{{ region }}'
RETURNING
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
SourceLocationName,
Tags,
VodSourceName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vod_sources
  props:
    - name: source_location_name
      value: "{{ source_location_name }}"
      description: Required parameter for the vod_sources resource.
    - name: vod_source_name
      value: "{{ vod_source_name }}"
      description: Required parameter for the vod_sources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vod_sources resource.
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
    defaultValue="update_vod_source"
    values={[
        { label: 'update_vod_source', value: 'update_vod_source' }
    ]}
>
<TabItem value="update_vod_source">

Updates a VOD source's configuration.

```sql
UPDATE aws.mediatailor.vod_sources
SET 
HttpPackageConfigurations = '{{ HttpPackageConfigurations }}'
WHERE 
source_location_name = '{{ source_location_name }}' --required
AND vod_source_name = '{{ vod_source_name }}' --required
AND region = '{{ region }}' --required
AND HttpPackageConfigurations = '{{ HttpPackageConfigurations }}' --required
RETURNING
Arn,
CreationTime,
HttpPackageConfigurations,
LastModifiedTime,
SourceLocationName,
Tags,
VodSourceName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vod_source"
    values={[
        { label: 'delete_vod_source', value: 'delete_vod_source' }
    ]}
>
<TabItem value="delete_vod_source">

The video on demand (VOD) source to delete.

```sql
DELETE FROM aws.mediatailor.vod_sources
WHERE source_location_name = '{{ source_location_name }}' --required
AND vod_source_name = '{{ vod_source_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
