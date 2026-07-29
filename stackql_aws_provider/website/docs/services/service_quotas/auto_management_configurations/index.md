--- 
title: auto_management_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - auto_management_configurations
  - service_quotas
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

Creates, updates, deletes, gets or lists an <code>auto_management_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auto_management_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.auto_management_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_auto_management_configuration"
    values={[
        { label: 'get_auto_management_configuration', value: 'get_auto_management_configuration' }
    ]}
>
<TabItem value="get_auto_management_configuration">

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
    <td><CopyableCode code="exclusion_list" /></td>
    <td><code>object</code></td>
    <td>List of Amazon Web Services services excluded from Automatic Management. You won't be notified of Service Quotas utilization for Amazon Web Services services added to the Automatic Management exclusion list.</td>
</tr>
<tr>
    <td><CopyableCode code="notification_arn" /></td>
    <td><code>string</code></td>
    <td>The User Notifications Amazon Resource Name (ARN) for Automatic Management notifications. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:*:.+:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="opt_in_level" /></td>
    <td><code>string</code></td>
    <td>Information on the opt-in level for Automatic Management. Only Amazon Web Services account level is supported. (ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="opt_in_status" /></td>
    <td><code>string</code></td>
    <td>Status on whether Automatic Management is started or stopped. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="opt_in_type" /></td>
    <td><code>string</code></td>
    <td>Information on the opt-in type for Automatic Management. There are two modes: Notify only and Notify and Auto-Adjust. Currently, only NotifyOnly is available. (NotifyOnly, NotifyAndAdjust)</td>
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
    <td><a href="#get_auto_management_configuration"><CopyableCode code="get_auto_management_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about your Service Quotas Automatic Management configuration. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.</td>
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
    defaultValue="get_auto_management_configuration"
    values={[
        { label: 'get_auto_management_configuration', value: 'get_auto_management_configuration' }
    ]}
>
<TabItem value="get_auto_management_configuration">

Retrieves information about your Service Quotas Automatic Management configuration. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.

```sql
SELECT
exclusion_list,
notification_arn,
opt_in_level,
opt_in_status,
opt_in_type
FROM aws.service_quotas.auto_management_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
