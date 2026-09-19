--- 
title: security_hub_features_v2
hide_title: false
hide_table_of_contents: false
keywords:
  - security_hub_features_v2
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>security_hub_features_v2</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_hub_features_v2" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.security_hub_features_v2" /></td></tr>
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
    <td><a href="#disable_security_hub_feature_v2"><CopyableCode code="disable_security_hub_feature_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_name"><code>feature_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables an opt-in feature for the calling account in the current Amazon Web Services Region. The operation is idempotent. If the feature is already disabled, no changes are made. You cannot disable a feature that is managed by an organization policy.</td>
</tr>
<tr>
    <td><a href="#enable_security_hub_feature_v2"><CopyableCode code="enable_security_hub_feature_v2" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-feature_name"><code>feature_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables an opt-in feature for the calling account in the current Amazon Web Services Region. The service must be enabled before you can enable a feature. The operation is idempotent. If the feature is already enabled, no changes are made. You cannot enable a feature that is managed by an organization policy.</td>
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
<tr id="parameter-feature_name">
    <td><CopyableCode code="feature_name" /></td>
    <td><code>string</code></td>
    <td>The name of the feature to enable.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_security_hub_feature_v2"
    values={[
        { label: 'disable_security_hub_feature_v2', value: 'disable_security_hub_feature_v2' },
        { label: 'enable_security_hub_feature_v2', value: 'enable_security_hub_feature_v2' }
    ]}
>
<TabItem value="disable_security_hub_feature_v2">

Disables an opt-in feature for the calling account in the current Amazon Web Services Region. The operation is idempotent. If the feature is already disabled, no changes are made. You cannot disable a feature that is managed by an organization policy.

```sql
EXEC aws.securityhub.security_hub_features_v2.disable_security_hub_feature_v2 
@feature_name='{{ feature_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_security_hub_feature_v2">

Enables an opt-in feature for the calling account in the current Amazon Web Services Region. The service must be enabled before you can enable a feature. The operation is idempotent. If the feature is already enabled, no changes are made. You cannot enable a feature that is managed by an organization policy.

```sql
EXEC aws.securityhub.security_hub_features_v2.enable_security_hub_feature_v2 
@feature_name='{{ feature_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
