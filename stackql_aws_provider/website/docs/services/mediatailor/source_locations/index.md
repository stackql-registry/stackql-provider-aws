--- 
title: source_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - source_locations
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

Creates, updates, deletes, gets or lists a <code>source_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.source_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_source_location"
    values={[
        { label: 'describe_source_location', value: 'describe_source_location' },
        { label: 'list_source_locations', value: 'list_source_locations' }
    ]}
>
<TabItem value="describe_source_location">

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
    <td><CopyableCode code="AccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>Access configuration parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the source location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultSegmentDeliveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpConfiguration" /></td>
    <td><code>object</code></td>
    <td>The HTTP configuration for the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the source location was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentDeliveryConfigurations" /></td>
    <td><code>array</code></td>
    <td>A list of the segment delivery configurations associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_source_locations">

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
    <td><CopyableCode code="AccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>Access configuration parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SourceLocation.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the source location was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultSegmentDeliveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</td>
</tr>
<tr>
    <td><CopyableCode code="HttpConfiguration" /></td>
    <td><code>object</code></td>
    <td>The HTTP configuration for the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the source location was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="SegmentDeliveryConfigurations" /></td>
    <td><code>array</code></td>
    <td>The segment delivery configurations for the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLocationName" /></td>
    <td><code>string</code></td>
    <td>The name of the source location.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the source location. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
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
    <td><a href="#describe_source_location"><CopyableCode code="describe_source_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#list_source_locations"><CopyableCode code="list_source_locations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.</td>
</tr>
<tr>
    <td><a href="#create_source_location"><CopyableCode code="create_source_location" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpConfiguration"><code>HttpConfiguration</code></a></td>
    <td></td>
    <td>Creates a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#update_source_location"><CopyableCode code="update_source_location" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HttpConfiguration"><code>HttpConfiguration</code></a></td>
    <td></td>
    <td>Updates a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_source_location"><CopyableCode code="delete_source_location" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-source_location_name"><code>source_location_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.</td>
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
    <td>The name of the source location.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of source locations that you want MediaTailor to return in response to the current request. If there are more than MaxResults source locations, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses DynamoDB-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListSourceLocations request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_source_location"
    values={[
        { label: 'describe_source_location', value: 'describe_source_location' },
        { label: 'list_source_locations', value: 'list_source_locations' }
    ]}
>
<TabItem value="describe_source_location">

Describes a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.

```sql
SELECT
AccessConfiguration,
Arn,
CreationTime,
DefaultSegmentDeliveryConfiguration,
HttpConfiguration,
LastModifiedTime,
SegmentDeliveryConfigurations,
SourceLocationName,
Tags
FROM aws.mediatailor.source_locations
WHERE source_location_name = '{{ source_location_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_source_locations">

Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.

```sql
SELECT
AccessConfiguration,
Arn,
CreationTime,
DefaultSegmentDeliveryConfiguration,
HttpConfiguration,
LastModifiedTime,
SegmentDeliveryConfigurations,
SourceLocationName,
Tags
FROM aws.mediatailor.source_locations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_source_location"
    values={[
        { label: 'create_source_location', value: 'create_source_location' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_source_location">

Creates a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.

```sql
INSERT INTO aws.mediatailor.source_locations (
AccessConfiguration,
DefaultSegmentDeliveryConfiguration,
HttpConfiguration,
SegmentDeliveryConfigurations,
Tags,
source_location_name,
region
)
SELECT 
'{{ AccessConfiguration }}',
'{{ DefaultSegmentDeliveryConfiguration }}',
'{{ HttpConfiguration }}' /* required */,
'{{ SegmentDeliveryConfigurations }}',
'{{ Tags }}',
'{{ source_location_name }}',
'{{ region }}'
RETURNING
AccessConfiguration,
Arn,
CreationTime,
DefaultSegmentDeliveryConfiguration,
HttpConfiguration,
LastModifiedTime,
SegmentDeliveryConfigurations,
SourceLocationName,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_locations
  props:
    - name: source_location_name
      value: "{{ source_location_name }}"
      description: Required parameter for the source_locations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_locations resource.
    - name: AccessConfiguration
      description: |
        Access configuration parameters.
      value:
        AccessType: "{{ AccessType }}"
        SecretsManagerAccessTokenConfiguration:
          HeaderName: "{{ HeaderName }}"
          SecretArn: "{{ SecretArn }}"
          SecretStringKey: "{{ SecretStringKey }}"
    - name: DefaultSegmentDeliveryConfiguration
      description: |
        The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.
      value:
        BaseUrl: "{{ BaseUrl }}"
    - name: HttpConfiguration
      description: |
        The HTTP configuration for the source location.
      value:
        BaseUrl: "{{ BaseUrl }}"
    - name: SegmentDeliveryConfigurations
      value:
        - BaseUrl: "{{ BaseUrl }}"
          Name: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_source_location"
    values={[
        { label: 'update_source_location', value: 'update_source_location' }
    ]}
>
<TabItem value="update_source_location">

Updates a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.

```sql
UPDATE aws.mediatailor.source_locations
SET 
AccessConfiguration = '{{ AccessConfiguration }}',
DefaultSegmentDeliveryConfiguration = '{{ DefaultSegmentDeliveryConfiguration }}',
HttpConfiguration = '{{ HttpConfiguration }}',
SegmentDeliveryConfigurations = '{{ SegmentDeliveryConfigurations }}'
WHERE 
source_location_name = '{{ source_location_name }}' --required
AND region = '{{ region }}' --required
AND HttpConfiguration = '{{ HttpConfiguration }}' --required
RETURNING
AccessConfiguration,
Arn,
CreationTime,
DefaultSegmentDeliveryConfiguration,
HttpConfiguration,
LastModifiedTime,
SegmentDeliveryConfigurations,
SourceLocationName,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_source_location"
    values={[
        { label: 'delete_source_location', value: 'delete_source_location' }
    ]}
>
<TabItem value="delete_source_location">

Deletes a source location. A source location is a container for sources. For more information about source locations, see Working with source locations in the MediaTailor User Guide.

```sql
DELETE FROM aws.mediatailor.source_locations
WHERE source_location_name = '{{ source_location_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
