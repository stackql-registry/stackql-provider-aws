--- 
title: verified_access_endpoint_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_endpoint_targets
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

Creates, updates, deletes, gets or lists a <code>verified_access_endpoint_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_endpoint_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_endpoint_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_verified_access_endpoint_targets"
    values={[
        { label: 'get_verified_access_endpoint_targets', value: 'get_verified_access_endpoint_targets' }
    ]}
>
<TabItem value="get_verified_access_endpoint_targets">

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
    <td><CopyableCode code="VerifiedAccessEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedAccessEndpointTargetDns" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the target.</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedAccessEndpointTargetIpAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address of the target.</td>
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
    <td><a href="#get_verified_access_endpoint_targets"><CopyableCode code="get_verified_access_endpoint_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VerifiedAccessEndpointId"><code>VerifiedAccessEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets the targets for the specified network CIDR endpoint for Verified Access.</td>
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
    <td>The ID of the network CIDR endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_verified_access_endpoint_targets"
    values={[
        { label: 'get_verified_access_endpoint_targets', value: 'get_verified_access_endpoint_targets' }
    ]}
>
<TabItem value="get_verified_access_endpoint_targets">

Gets the targets for the specified network CIDR endpoint for Verified Access.

```sql
SELECT
VerifiedAccessEndpointId,
VerifiedAccessEndpointTargetDns,
VerifiedAccessEndpointTargetIpAddress
FROM aws.ec2.verified_access_endpoint_targets
WHERE VerifiedAccessEndpointId = '{{ VerifiedAccessEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
