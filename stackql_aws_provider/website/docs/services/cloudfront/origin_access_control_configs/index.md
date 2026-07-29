--- 
title: origin_access_control_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - origin_access_control_configs
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

Creates, updates, deletes, gets or lists an <code>origin_access_control_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="origin_access_control_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.origin_access_control_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_origin_access_control_config"
    values={[
        { label: 'get_origin_access_control_config', value: 'get_origin_access_control_config' }
    ]}
>
<TabItem value="get_origin_access_control_config">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the origin access control.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name to identify the origin access control. You can specify up to 64 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_access_control_origin_type" /></td>
    <td><code>string</code></td>
    <td>The type of origin that this origin access control is for.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_behavior" /></td>
    <td><code>string</code></td>
    <td>Specifies which requests CloudFront signs (adds authentication information to). Specify always for the most common use case. For more information, see origin access control advanced settings in the Amazon CloudFront Developer Guide. This field can have one of the following values: always – CloudFront signs all origin requests, overwriting the Authorization header from the viewer request if one exists. never – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control. no-override – If the viewer request doesn't contain the Authorization header, then CloudFront signs the origin request. If the viewer request contains the Authorization header, then CloudFront doesn't sign the origin request and instead passes along the Authorization header from the viewer request. WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_protocol" /></td>
    <td><code>string</code></td>
    <td>The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is sigv4.</td>
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
    <td><a href="#get_origin_access_control_config"><CopyableCode code="get_origin_access_control_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a CloudFront origin access control configuration.</td>
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
    <td>The unique identifier of the origin access control.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_origin_access_control_config"
    values={[
        { label: 'get_origin_access_control_config', value: 'get_origin_access_control_config' }
    ]}
>
<TabItem value="get_origin_access_control_config">

Gets a CloudFront origin access control configuration.

```sql
SELECT
description,
name,
origin_access_control_origin_type,
signing_behavior,
signing_protocol
FROM aws.cloudfront.origin_access_control_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
