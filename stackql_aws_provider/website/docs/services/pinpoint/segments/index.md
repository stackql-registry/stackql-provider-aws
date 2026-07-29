--- 
title: segments
hide_title: false
hide_table_of_contents: false
keywords:
  - segments
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.segments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment"
    values={[
        { label: 'get_segment', value: 'get_segment' },
        { label: 'get_segments', value: 'get_segments' }
    ]}
>
<TabItem value="get_segment">

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
    <td>The unique identifier for the application that the segment is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the segment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>object</code></td>
    <td>Specifies the dimension settings for a segment.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="import_definition" /></td>
    <td><code>object</code></td>
    <td>The settings for the import job that's associated with the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the segment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_groups" /></td>
    <td><code>object</code></td>
    <td>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</td>
</tr>
<tr>
    <td><CopyableCode code="segment_type" /></td>
    <td><code>string</code></td>
    <td>The segment type. Valid values are: DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time. IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time. (DIMENSIONAL, IMPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the segment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_segments">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#get_segment"><CopyableCode code="get_segment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-segment-id"><code>segment-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.</td>
</tr>
<tr>
    <td><a href="#get_segments"><CopyableCode code="get_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td>Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.</td>
</tr>
<tr>
    <td><a href="#create_segment"><CopyableCode code="create_segment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WriteSegmentRequest"><code>WriteSegmentRequest</code></a></td>
    <td></td>
    <td>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</td>
</tr>
<tr>
    <td><a href="#update_segment"><CopyableCode code="update_segment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-segment-id"><code>segment-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WriteSegmentRequest"><code>WriteSegmentRequest</code></a></td>
    <td></td>
    <td>Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.</td>
</tr>
<tr>
    <td><a href="#delete_segment"><CopyableCode code="delete_segment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-segment-id"><code>segment-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a segment from an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-segment-id">
    <td><CopyableCode code="segment-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the segment.</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>The NextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment"
    values={[
        { label: 'get_segment', value: 'get_segment' },
        { label: 'get_segments', value: 'get_segments' }
    ]}
>
<TabItem value="get_segment">

Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.

```sql
SELECT
application_id,
arn,
creation_date,
dimensions,
id,
import_definition,
last_modified_date,
name,
segment_groups,
segment_type,
version,
tags
FROM aws.pinpoint.segments
WHERE `application-id` = '{{ application-id }}' -- required
AND `segment-id` = '{{ segment-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_segments">

Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.

```sql
SELECT
item,
next_token
FROM aws.pinpoint.segments
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
AND `page-size` = '{{ page-size }}'
AND token = '{{ token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_segment"
    values={[
        { label: 'create_segment', value: 'create_segment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_segment">

Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.

```sql
INSERT INTO aws.pinpoint.segments (
WriteSegmentRequest,
`application-id`,
region
)
SELECT 
'{{ WriteSegmentRequest }}' /* required */,
'{{ application-id }}',
'{{ region }}'
RETURNING
segment_response
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: segments
  props:
    - name: application-id
      value: "{{ application-id }}"
      description: Required parameter for the segments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the segments resource.
    - name: WriteSegmentRequest
      description: |
        Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
      value:
        Dimensions:
          Attributes: "{{ Attributes }}"
          Behavior:
            Recency:
              Duration: "{{ Duration }}"
              RecencyType: "{{ RecencyType }}"
          Demographic:
            AppVersion:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            Channel:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            DeviceType:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            Make:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            Model:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            Platform:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
          Location:
            Country:
              DimensionType: "{{ DimensionType }}"
              Values:
                - "{{ Values }}"
            GPSPoint:
              Coordinates:
                Latitude: {{ Latitude }}
                Longitude: {{ Longitude }}
              RangeInKilometers: {{ RangeInKilometers }}
          Metrics: "{{ Metrics }}"
          UserAttributes: "{{ UserAttributes }}"
        Name: "{{ Name }}"
        SegmentGroups:
          Groups:
            - Dimensions: "{{ Dimensions }}"
              SourceSegments: "{{ SourceSegments }}"
              SourceType: "{{ SourceType }}"
              Type: "{{ Type }}"
          Include: "{{ Include }}"
        tags: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_segment"
    values={[
        { label: 'update_segment', value: 'update_segment' }
    ]}
>
<TabItem value="update_segment">

Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.

```sql
UPDATE aws.pinpoint.segments
SET 
WriteSegmentRequest = '{{ WriteSegmentRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND `segment-id` = '{{ segment-id }}' --required
AND region = '{{ region }}' --required
AND WriteSegmentRequest = '{{ WriteSegmentRequest }}' --required
RETURNING
segment_response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_segment"
    values={[
        { label: 'delete_segment', value: 'delete_segment' }
    ]}
>
<TabItem value="delete_segment">

Deletes a segment from an application.

```sql
DELETE FROM aws.pinpoint.segments
WHERE `application-id` = '{{ application-id }}' --required
AND `segment-id` = '{{ segment-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
