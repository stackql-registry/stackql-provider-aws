--- 
title: verified_access_endpoint_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_endpoint_policies
  - ec2
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

Creates, updates, deletes, gets or lists a <code>verified_access_endpoint_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_endpoint_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_endpoint_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_verified_access_endpoint_policy"
    values={[
        { label: 'get_verified_access_endpoint_policy', value: 'get_verified_access_endpoint_policy' }
    ]}
>
<TabItem value="get_verified_access_endpoint_policy">

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
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The Verified Access policy document.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The status of the Verified Access policy.</td>
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
    <td><a href="#get_verified_access_endpoint_policy"><CopyableCode code="get_verified_access_endpoint_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Get the Verified Access policy associated with the endpoint.</td>
</tr>
<tr>
    <td><a href="#modify_verified_access_endpoint_policy"><CopyableCode code="modify_verified_access_endpoint_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyEnabled"><code>PolicyEnabled</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SseSpecification"><code>SseSpecification</code></a></td>
    <td>Modifies the specified Amazon Web Services Verified Access endpoint policy.</td>
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
<tr id="parameter-VerifiedAccessEndpointId">
    <td><CopyableCode code="VerifiedAccessEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>The Verified Access policy document.</td>
</tr>
<tr id="parameter-PolicyEnabled">
    <td><CopyableCode code="PolicyEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The status of the Verified Access policy.</td>
</tr>
<tr id="parameter-SseSpecification">
    <td><CopyableCode code="SseSpecification" /></td>
    <td><code>object</code></td>
    <td>The options for server side encryption.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_verified_access_endpoint_policy"
    values={[
        { label: 'get_verified_access_endpoint_policy', value: 'get_verified_access_endpoint_policy' }
    ]}
>
<TabItem value="get_verified_access_endpoint_policy">

Get the Verified Access policy associated with the endpoint.

```sql
SELECT
PolicyDocument,
PolicyEnabled
FROM aws.ec2.verified_access_endpoint_policies
WHERE VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_verified_access_endpoint_policy"
    values={[
        { label: 'modify_verified_access_endpoint_policy', value: 'modify_verified_access_endpoint_policy' }
    ]}
>
<TabItem value="modify_verified_access_endpoint_policy">

Modifies the specified Amazon Web Services Verified Access endpoint policy.

```sql
UPDATE aws.ec2.verified_access_endpoint_policies
SET 
-- No updatable properties
WHERE 
VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}' --required
AND region = '{{ region }}' --required
AND PolicyEnabled = {{ PolicyEnabled}}
AND PolicyDocument = '{{ PolicyDocument}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
AND SseSpecification = '{{ SseSpecification}}'
RETURNING
PolicyDocument,
PolicyEnabled,
SseSpecification;
```
</TabItem>
</Tabs>
