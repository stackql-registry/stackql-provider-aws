--- 
title: application_layer_automatic_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - application_layer_automatic_responses
  - shield
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

Creates, updates, deletes, gets or lists an <code>application_layer_automatic_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_layer_automatic_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.application_layer_automatic_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_application_layer_automatic_response"><CopyableCode code="update_application_layer_automatic_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.</td>
</tr>
<tr>
    <td><a href="#disable_application_layer_automatic_response"><CopyableCode code="disable_application_layer_automatic_response" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource.</td>
</tr>
<tr>
    <td><a href="#enable_application_layer_automatic_response"><CopyableCode code="enable_application_layer_automatic_response" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. This feature is available for Amazon CloudFront distributions and Application Load Balancers only. This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see Shield Advanced automatic application layer DDoS mitigation. Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use UpdateApplicationLayerAutomaticResponse. To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at https:​//console.aws.amazon.com/wafv2/shieldv2#/. For more information, see Getting Started with Shield Advanced. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see WAF Developer Guide.</td>
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
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update_application_layer_automatic_response"
    values={[
        { label: 'update_application_layer_automatic_response', value: 'update_application_layer_automatic_response' }
    ]}
>
<TabItem value="update_application_layer_automatic_response">

Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.

```sql
UPDATE aws.shield.application_layer_automatic_responses
SET 
ResourceArn = '{{ ResourceArn }}',
Action = '{{ Action }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND Action = '{{ Action }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_application_layer_automatic_response"
    values={[
        { label: 'disable_application_layer_automatic_response', value: 'disable_application_layer_automatic_response' },
        { label: 'enable_application_layer_automatic_response', value: 'enable_application_layer_automatic_response' }
    ]}
>
<TabItem value="disable_application_layer_automatic_response">

Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource.

```sql
EXEC aws.shield.application_layer_automatic_responses.disable_application_layer_automatic_response 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArn": "{{ ResourceArn }}"
}'
;
```
</TabItem>
<TabItem value="enable_application_layer_automatic_response">

Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. This feature is available for Amazon CloudFront distributions and Application Load Balancers only. This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see Shield Advanced automatic application layer DDoS mitigation. Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use UpdateApplicationLayerAutomaticResponse. To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at https://console.aws.amazon.com/wafv2/shieldv2#/. For more information, see Getting Started with Shield Advanced. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see WAF Developer Guide.

```sql
EXEC aws.shield.application_layer_automatic_responses.enable_application_layer_automatic_response 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArn": "{{ ResourceArn }}", 
"Action": "{{ Action }}"
}'
;
```
</TabItem>
</Tabs>
