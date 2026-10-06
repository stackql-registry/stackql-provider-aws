--- 
title: security_hubs
hide_title: false
hide_table_of_contents: false
keywords:
  - security_hubs
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

Creates, updates, deletes, gets or lists a <code>security_hubs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_hubs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.security_hubs" /></td></tr>
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
    <td><a href="#disable_security_hub"><CopyableCode code="disable_security_hub" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables Security Hub CSPM in your account only in the current Amazon Web Services Region. To disable Security Hub CSPM in all Regions, you must submit one request per Region where you have enabled Security Hub CSPM. You can't disable Security Hub CSPM in an account that is currently the Security Hub CSPM administrator. When you disable Security Hub CSPM, your existing findings and insights and any Security Hub CSPM configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub CSPM.</td>
</tr>
<tr>
    <td><a href="#enable_security_hub"><CopyableCode code="enable_security_hub" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables Security Hub CSPM for your account in the current Region or the Region you specify in the request. When you enable Security Hub CSPM, you grant to Security Hub CSPM the permissions necessary to gather findings from other services that are integrated with Security Hub CSPM. When you use the EnableSecurityHub operation to enable Security Hub CSPM, you also automatically enable the following standards: Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0 Amazon Web Services Foundational Security Best Practices Other standards are not automatically enabled. To opt out of automatically enabled standards, set EnableDefaultStandards to false. After you enable Security Hub CSPM, to enable a standard, use the BatchEnableStandards operation. To disable a standard, use the BatchDisableStandards operation. To learn more, see the setup information in the Security Hub CSPM User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_security_hub"
    values={[
        { label: 'disable_security_hub', value: 'disable_security_hub' },
        { label: 'enable_security_hub', value: 'enable_security_hub' }
    ]}
>
<TabItem value="disable_security_hub">

Disables Security Hub CSPM in your account only in the current Amazon Web Services Region. To disable Security Hub CSPM in all Regions, you must submit one request per Region where you have enabled Security Hub CSPM. You can't disable Security Hub CSPM in an account that is currently the Security Hub CSPM administrator. When you disable Security Hub CSPM, your existing findings and insights and any Security Hub CSPM configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub CSPM.

```sql
EXEC aws.securityhub.security_hubs.disable_security_hub 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_security_hub">

Enables Security Hub CSPM for your account in the current Region or the Region you specify in the request. When you enable Security Hub CSPM, you grant to Security Hub CSPM the permissions necessary to gather findings from other services that are integrated with Security Hub CSPM. When you use the EnableSecurityHub operation to enable Security Hub CSPM, you also automatically enable the following standards: Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0 Amazon Web Services Foundational Security Best Practices Other standards are not automatically enabled. To opt out of automatically enabled standards, set EnableDefaultStandards to false. After you enable Security Hub CSPM, to enable a standard, use the BatchEnableStandards operation. To disable a standard, use the BatchDisableStandards operation. To learn more, see the setup information in the Security Hub CSPM User Guide.

```sql
EXEC aws.securityhub.security_hubs.enable_security_hub 
@region='{{ region }}' --required 
@@json=
'{
"Tags": "{{ Tags }}", 
"EnableDefaultStandards": {{ EnableDefaultStandards }}, 
"ControlFindingGenerator": "{{ ControlFindingGenerator }}"
}'
;
```
</TabItem>
</Tabs>
