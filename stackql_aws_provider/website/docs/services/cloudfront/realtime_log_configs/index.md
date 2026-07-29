--- 
title: realtime_log_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - realtime_log_configs
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>realtime_log_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="realtime_log_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.realtime_log_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_realtime_log_configs"
    values={[
        { label: 'list_realtime_log_configs', value: 'list_realtime_log_configs' }
    ]}
>
<TabItem value="list_realtime_log_configs">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether there are more real-time log configurations than are contained in this list.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the list of real-time log configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>This parameter indicates where this list of real-time log configurations begins. This list includes real-time log configurations that occur after the marker.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of real-time log configurations requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing real-time log configurations where you left off.</td>
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
    <td><a href="#list_realtime_log_configs"><CopyableCode code="list_realtime_log_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Gets a list of real-time log configurations. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_realtime_log_config"><CopyableCode code="create_realtime_log_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndPoints"><code>EndPoints</code></a>, <a href="#parameter-SamplingRate"><code>SamplingRate</code></a></td>
    <td></td>
    <td>Creates a real-time log configuration. After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream. For more information about real-time log configurations, see Real-time logs in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_realtime_log_config"><CopyableCode code="update_realtime_log_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a real-time log configuration. When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration: Call GetRealtimeLogConfig to get the current real-time log configuration. Locally modify the parameters in the real-time log configuration that you want to update. Call this API (UpdateRealtimeLogConfig) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't. You cannot update a real-time log configuration's Name or ARN.</td>
</tr>
<tr>
    <td><a href="#delete_realtime_log_config"><CopyableCode code="delete_realtime_log_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a real-time log configuration. You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration. To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</td>
</tr>
<tr>
    <td><a href="#get_realtime_log_config"><CopyableCode code="get_realtime_log_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a real-time log configuration. To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</td>
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
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of real-time log configurations that you want in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_realtime_log_configs"
    values={[
        { label: 'list_realtime_log_configs', value: 'list_realtime_log_configs' }
    ]}
>
<TabItem value="list_realtime_log_configs">

Gets a list of real-time log configurations. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker
FROM aws.cloudfront.realtime_log_configs
WHERE region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_realtime_log_config"
    values={[
        { label: 'create_realtime_log_config', value: 'create_realtime_log_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_realtime_log_config">

Creates a real-time log configuration. After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream. For more information about real-time log configurations, see Real-time logs in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.realtime_log_configs (
EndPoints,
Fields,
Name,
SamplingRate,
region
)
SELECT 
'{{ EndPoints }}' /* required */,
'{{ Fields }}',
'{{ Name }}',
{{ SamplingRate }} /* required */,
'{{ region }}'
RETURNING
arn,
end_points,
fields,
name,
sampling_rate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: realtime_log_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the realtime_log_configs resource.
    - name: EndPoints
      value:
        - StreamType: "{{ StreamType }}"
          KinesisStreamConfig:
            RoleARN: "{{ RoleARN }}"
            StreamARN: "{{ StreamARN }}"
    - name: Fields
      value:
        - "{{ Fields }}"
    - name: Name
      value: "{{ Name }}"
    - name: SamplingRate
      value: {{ SamplingRate }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_realtime_log_config"
    values={[
        { label: 'update_realtime_log_config', value: 'update_realtime_log_config' }
    ]}
>
<TabItem value="update_realtime_log_config">

Updates a real-time log configuration. When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration: Call GetRealtimeLogConfig to get the current real-time log configuration. Locally modify the parameters in the real-time log configuration that you want to update. Call this API (UpdateRealtimeLogConfig) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't. You cannot update a real-time log configuration's Name or ARN.

```sql
UPDATE aws.cloudfront.realtime_log_configs
SET 
EndPoints = '{{ EndPoints }}',
Fields = '{{ Fields }}',
Name = '{{ Name }}',
ARN = '{{ ARN }}',
SamplingRate = {{ SamplingRate }}
WHERE 
region = '{{ region }}' --required
RETURNING
arn,
end_points,
fields,
name,
sampling_rate;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_realtime_log_config"
    values={[
        { label: 'delete_realtime_log_config', value: 'delete_realtime_log_config' }
    ]}
>
<TabItem value="delete_realtime_log_config">

Deletes a real-time log configuration. You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration. To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.

```sql
DELETE FROM aws.cloudfront.realtime_log_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_realtime_log_config"
    values={[
        { label: 'get_realtime_log_config', value: 'get_realtime_log_config' }
    ]}
>
<TabItem value="get_realtime_log_config">

Gets a real-time log configuration. To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.

```sql
EXEC aws.cloudfront.realtime_log_configs.get_realtime_log_config 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"ARN": "{{ ARN }}"
}'
;
```
</TabItem>
</Tabs>
