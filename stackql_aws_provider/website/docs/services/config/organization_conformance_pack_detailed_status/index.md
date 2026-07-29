--- 
title: organization_conformance_pack_detailed_status
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_conformance_pack_detailed_status
  - config
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

Creates, updates, deletes, gets or lists an <code>organization_conformance_pack_detailed_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_conformance_pack_detailed_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.organization_conformance_pack_detailed_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_organization_conformance_pack_detailed_status"
    values={[
        { label: 'get_organization_conformance_pack_detailed_status', value: 'get_organization_conformance_pack_detailed_status' }
    ]}
>
<TabItem value="get_organization_conformance_pack_detailed_status">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account ID of a member account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conformance_pack_name" /></td>
    <td><code>string</code></td>
    <td>The name of conformance pack deployed in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>An error code that is returned when conformance pack creation or deletion failed in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>An error message indicating that conformance pack account creation or deletion has failed due to an error in the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last status update.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates deployment status for conformance pack in a member account. When management account calls PutOrganizationConformancePack action for the first time, conformance pack status is created in the member account. When management account calls PutOrganizationConformancePack action for the second time, conformance pack status is updated in the member account. Conformance pack status is deleted when the management account deletes OrganizationConformancePack and disables service access for config-multiaccountsetup.amazonaws.com. Config sets the state of the conformance pack to: CREATE_SUCCESSFUL when conformance pack has been created in the member account. CREATE_IN_PROGRESS when conformance pack is being created in the member account. CREATE_FAILED when conformance pack creation has failed in the member account. DELETE_FAILED when conformance pack deletion has failed in the member account. DELETE_IN_PROGRESS when conformance pack is being deleted in the member account. DELETE_SUCCESSFUL when conformance pack has been deleted in the member account. UPDATE_SUCCESSFUL when conformance pack has been updated in the member account. UPDATE_IN_PROGRESS when conformance pack is being updated in the member account. UPDATE_FAILED when conformance pack deletion has failed in the member account. (CREATE_SUCCESSFUL, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_SUCCESSFUL, DELETE_FAILED, DELETE_IN_PROGRESS, UPDATE_SUCCESSFUL, UPDATE_IN_PROGRESS, UPDATE_FAILED)</td>
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
    <td><a href="#get_organization_conformance_pack_detailed_status"><CopyableCode code="get_organization_conformance_pack_detailed_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed status for each member account within an organization for a given organization conformance pack.</td>
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
    defaultValue="get_organization_conformance_pack_detailed_status"
    values={[
        { label: 'get_organization_conformance_pack_detailed_status', value: 'get_organization_conformance_pack_detailed_status' }
    ]}
>
<TabItem value="get_organization_conformance_pack_detailed_status">

Returns detailed status for each member account within an organization for a given organization conformance pack.

```sql
SELECT
account_id,
conformance_pack_name,
error_code,
error_message,
last_update_time,
status
FROM aws.config.organization_conformance_pack_detailed_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
