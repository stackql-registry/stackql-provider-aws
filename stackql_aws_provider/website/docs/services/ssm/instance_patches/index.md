--- 
title: instance_patches
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_patches
  - ssm
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

Creates, updates, deletes, gets or lists an <code>instance_patches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_patches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.instance_patches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_patches"
    values={[
        { label: 'describe_instance_patches', value: 'describe_instance_patches' }
    ]}
>
<TabItem value="describe_instance_patches">

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
    <td><CopyableCode code="cve_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by the patch. Currently, CVE ID values are reported only for patches with a status of Missing or Failed.</td>
</tr>
<tr>
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>The classification of the patch, such as SecurityUpdates, Updates, and CriticalUpdates.</td>
</tr>
<tr>
    <td><CopyableCode code="installed_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time the patch was installed on the managed node. Not all operating systems provide this level of information.</td>
</tr>
<tr>
    <td><CopyableCode code="kb_id" /></td>
    <td><code>string</code></td>
    <td>The operating system-specific ID of the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the patch such as Critical, Important, and Moderate.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the patch on the managed node, such as INSTALLED or FAILED. For descriptions of each patch state, see About patch compliance in the Amazon Web Services Systems Manager User Guide. (INSTALLED, INSTALLED_OTHER, INSTALLED_PENDING_REBOOT, INSTALLED_REJECTED, MISSING, NOT_APPLICABLE, FAILED, AVAILABLE_SECURITY_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the patch.</td>
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
    <td><a href="#describe_instance_patches"><CopyableCode code="describe_instance_patches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.</td>
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
    defaultValue="describe_instance_patches"
    values={[
        { label: 'describe_instance_patches', value: 'describe_instance_patches' }
    ]}
>
<TabItem value="describe_instance_patches">

Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.

```sql
SELECT
cve_ids,
classification,
installed_time,
kb_id,
severity,
state,
title
FROM aws.ssm.instance_patches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
