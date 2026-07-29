--- 
title: origin_access_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_access_controls
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

Creates, updates, deletes, gets or lists an <code>origin_access_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_access_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.origin_access_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_origin_access_control"
    values={[
        { label: 'get_origin_access_control', value: 'get_origin_access_control' },
        { label: 'list_origin_access_controls', value: 'list_origin_access_controls' }
    ]}
>
<TabItem value="get_origin_access_control">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the origin access control.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_access_control_config" /></td>
    <td><code>string</code></td>
    <td>The origin access control.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_origin_access_controls">

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
    <td>If there are more items in the list than are in this response, this value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Contains the origin access controls in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The value of the Marker field that was provided in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of origin access controls requested.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value to use in the Marker field of another request to continue listing origin access controls.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of origin access controls returned in the response.</td>
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
    <td><a href="#get_origin_access_control"><CopyableCode code="get_origin_access_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a CloudFront origin access control, including its unique identifier.</td>
</tr>
<tr>
    <td><a href="#list_origin_access_controls"><CopyableCode code="list_origin_access_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Gets the list of CloudFront origin access controls (OACs) in this Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the NextMarker value from the current response as the Marker value in the next request. If you're not using origin access controls for your Amazon Web Services account, the ListOriginAccessControls operation doesn't return the Items element in the response.</td>
</tr>
<tr>
    <td><a href="#create_origin_access_control"><CopyableCode code="create_origin_access_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginAccessControlConfig"><code>OriginAccessControlConfig</code></a></td>
    <td></td>
    <td>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin. This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront. For more information about using a CloudFront origin access control, see Restricting access to an Amazon Web Services origin in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_origin_access_control"><CopyableCode code="update_origin_access_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginAccessControlConfig"><code>OriginAccessControlConfig</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Updates a CloudFront origin access control.</td>
</tr>
<tr>
    <td><a href="#delete_origin_access_control"><CopyableCode code="delete_origin_access_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a></td>
    <td>Deletes a CloudFront origin access control. You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the origin access control that you are deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the origin access control that you are deleting.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of origin access controls that you want in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_origin_access_control"
    values={[
        { label: 'get_origin_access_control', value: 'get_origin_access_control' },
        { label: 'list_origin_access_controls', value: 'list_origin_access_controls' }
    ]}
>
<TabItem value="get_origin_access_control">

Gets a CloudFront origin access control, including its unique identifier.

```sql
SELECT
id,
origin_access_control_config
FROM aws.cloudfront.origin_access_controls
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_origin_access_controls">

Gets the list of CloudFront origin access controls (OACs) in this Amazon Web Services account. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the NextMarker value from the current response as the Marker value in the next request. If you're not using origin access controls for your Amazon Web Services account, the ListOriginAccessControls operation doesn't return the Items element in the response.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.origin_access_controls
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_origin_access_control"
    values={[
        { label: 'create_origin_access_control', value: 'create_origin_access_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_origin_access_control">

Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin. This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront. For more information about using a CloudFront origin access control, see Restricting access to an Amazon Web Services origin in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.origin_access_controls (
OriginAccessControlConfig,
region
)
SELECT 
'{{ OriginAccessControlConfig }}' /* required */,
'{{ region }}'
RETURNING
id,
origin_access_control_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: origin_access_controls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the origin_access_controls resource.
    - name: OriginAccessControlConfig
      description: |
        A CloudFront origin access control configuration.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        SigningProtocol: "{{ SigningProtocol }}"
        SigningBehavior: "{{ SigningBehavior }}"
        OriginAccessControlOriginType: "{{ OriginAccessControlOriginType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_origin_access_control"
    values={[
        { label: 'update_origin_access_control', value: 'update_origin_access_control' }
    ]}
>
<TabItem value="update_origin_access_control">

Updates a CloudFront origin access control.

```sql
UPDATE aws.cloudfront.origin_access_controls
SET 
OriginAccessControlConfig = '{{ OriginAccessControlConfig }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND OriginAccessControlConfig = '{{ OriginAccessControlConfig }}' --required
AND `If-Match` = '{{ If-Match}}'
RETURNING
id,
origin_access_control_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_origin_access_control"
    values={[
        { label: 'delete_origin_access_control', value: 'delete_origin_access_control' }
    ]}
>
<TabItem value="delete_origin_access_control">

Deletes a CloudFront origin access control. You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.

```sql
DELETE FROM aws.cloudfront.origin_access_controls
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `If-Match` = '{{ If-Match }}'
;
```
</TabItem>
</Tabs>
