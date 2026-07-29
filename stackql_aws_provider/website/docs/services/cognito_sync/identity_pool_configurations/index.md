--- 
title: identity_pool_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_configurations
  - cognito_sync
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

Creates, updates, deletes, gets or lists an <code>identity_pool_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_pool_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.identity_pool_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_pool_configuration"
    values={[
        { label: 'get_identity_pool_configuration', value: 'get_identity_pool_configuration' }
    ]}
>
<TabItem value="get_identity_pool_configuration">

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
    <td><CopyableCode code="cognito_streams" /></td>
    <td><code>object</code></td>
    <td>Options to apply to this identity pool for Amazon Cognito streams.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="push_sync" /></td>
    <td><code>object</code></td>
    <td>Options to apply to this identity pool for push synchronization.</td>
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
    <td><a href="#get_identity_pool_configuration"><CopyableCode code="get_identity_pool_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the configuration settings of an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</td>
</tr>
<tr>
    <td><a href="#set_identity_pool_configuration"><CopyableCode code="set_identity_pool_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the necessary configuration for push sync. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</td>
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
<tr id="parameter-identity_pool_id">
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. This is the ID of the pool to modify.</td>
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
    defaultValue="get_identity_pool_configuration"
    values={[
        { label: 'get_identity_pool_configuration', value: 'get_identity_pool_configuration' }
    ]}
>
<TabItem value="get_identity_pool_configuration">

Gets the configuration settings of an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.

```sql
SELECT
cognito_streams,
identity_pool_id,
push_sync
FROM aws.cognito_sync.identity_pool_configurations
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_identity_pool_configuration"
    values={[
        { label: 'set_identity_pool_configuration', value: 'set_identity_pool_configuration' }
    ]}
>
<TabItem value="set_identity_pool_configuration">

Sets the necessary configuration for push sync. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.

```sql
UPDATE aws.cognito_sync.identity_pool_configurations
SET 
PushSync = '{{ PushSync }}',
CognitoStreams = '{{ CognitoStreams }}'
WHERE 
identity_pool_id = '{{ identity_pool_id }}' --required
AND region = '{{ region }}' --required
RETURNING
cognito_streams,
identity_pool_id,
push_sync;
```
</TabItem>
</Tabs>
