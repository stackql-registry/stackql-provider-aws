--- 
title: cross_account_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_account_resources
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>cross_account_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_account_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.cross_account_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cross_account_resources"
    values={[
        { label: 'list_cross_account_resources', value: 'list_cross_account_resources' }
    ]}
>
<TabItem value="list_cross_account_resources">

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
    <td><CopyableCode code="attachment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cross-account attachment that specifies the resources (endpoints or CIDR range) that can be added to accelerators and principals that have permission to add them.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>An IP address range, in CIDR format, that is specified as an Amazon Web Services resource. The address must be provisioned and advertised in Global Accelerator by following the bring your own IP address (BYOIP) process for Global Accelerator. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The endpoint ID for the endpoint that is listed in a cross-account attachment and can be added to an accelerator by specified principals.</td>
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
    <td><a href="#list_cross_account_resources"><CopyableCode code="list_cross_account_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the cross-account resources available to work with.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="list_cross_account_resources"
    values={[
        { label: 'list_cross_account_resources', value: 'list_cross_account_resources' }
    ]}
>
<TabItem value="list_cross_account_resources">

List the cross-account resources available to work with.

```sql
SELECT
attachment_arn,
cidr,
endpoint_id
FROM aws.globalaccelerator.cross_account_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
