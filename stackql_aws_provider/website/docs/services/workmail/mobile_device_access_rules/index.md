--- 
title: mobile_device_access_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - mobile_device_access_rules
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mobile_device_access_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mobile_device_access_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mobile_device_access_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_mobile_device_access_rules"
    values={[
        { label: 'list_mobile_device_access_rules', value: 'list_mobile_device_access_rules' }
    ]}
>
<TabItem value="list_mobile_device_access_rules">

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
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The list of mobile device access rules that exist under the specified WorkMail organization.</td>
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
    <td><a href="#list_mobile_device_access_rules"><CopyableCode code="list_mobile_device_access_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the mobile device access rules for the specified WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#create_mobile_device_access_rule"><CopyableCode code="create_mobile_device_access_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Effect"><code>Effect</code></a></td>
    <td></td>
    <td>Creates a new mobile device access rule for the specified WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#update_mobile_device_access_rule"><CopyableCode code="update_mobile_device_access_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-MobileDeviceAccessRuleId"><code>MobileDeviceAccessRuleId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Effect"><code>Effect</code></a></td>
    <td></td>
    <td>Updates a mobile device access rule for the specified WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#delete_mobile_device_access_rule"><CopyableCode code="delete_mobile_device_access_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a mobile device access rule for the specified WorkMail organization. Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</td>
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
    defaultValue="list_mobile_device_access_rules"
    values={[
        { label: 'list_mobile_device_access_rules', value: 'list_mobile_device_access_rules' }
    ]}
>
<TabItem value="list_mobile_device_access_rules">

Lists the mobile device access rules for the specified WorkMail organization.

```sql
SELECT
rules
FROM aws.workmail.mobile_device_access_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mobile_device_access_rule"
    values={[
        { label: 'create_mobile_device_access_rule', value: 'create_mobile_device_access_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mobile_device_access_rule">

Creates a new mobile device access rule for the specified WorkMail organization.

```sql
INSERT INTO aws.workmail.mobile_device_access_rules (
OrganizationId,
ClientToken,
Name,
Description,
Effect,
DeviceTypes,
NotDeviceTypes,
DeviceModels,
NotDeviceModels,
DeviceOperatingSystems,
NotDeviceOperatingSystems,
DeviceUserAgents,
NotDeviceUserAgents,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ ClientToken }}',
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ Effect }}' /* required */,
'{{ DeviceTypes }}',
'{{ NotDeviceTypes }}',
'{{ DeviceModels }}',
'{{ NotDeviceModels }}',
'{{ DeviceOperatingSystems }}',
'{{ NotDeviceOperatingSystems }}',
'{{ DeviceUserAgents }}',
'{{ NotDeviceUserAgents }}',
'{{ region }}'
RETURNING
mobile_device_access_rule_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mobile_device_access_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mobile_device_access_rules resource.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The WorkMail organization under which the rule will be created.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        The idempotency token for the client request.
    - name: Name
      value: "{{ Name }}"
      description: |
        The rule name.
    - name: Description
      value: "{{ Description }}"
      description: |
        The rule description.
    - name: Effect
      value: "{{ Effect }}"
      description: |
        The effect of the rule when it matches. Allowed values are ALLOW or DENY.
      valid_values: ['ALLOW', 'DENY']
    - name: DeviceTypes
      value:
        - "{{ DeviceTypes }}"
      description: |
        Device types that the rule will match.
    - name: NotDeviceTypes
      value:
        - "{{ NotDeviceTypes }}"
      description: |
        Device types that the rule will not match. All other device types will match.
    - name: DeviceModels
      value:
        - "{{ DeviceModels }}"
      description: |
        Device models that the rule will match.
    - name: NotDeviceModels
      value:
        - "{{ NotDeviceModels }}"
      description: |
        Device models that the rule will not match. All other device models will match.
    - name: DeviceOperatingSystems
      value:
        - "{{ DeviceOperatingSystems }}"
      description: |
        Device operating systems that the rule will match.
    - name: NotDeviceOperatingSystems
      value:
        - "{{ NotDeviceOperatingSystems }}"
      description: |
        Device operating systems that the rule will not match. All other device operating systems will match.
    - name: DeviceUserAgents
      value:
        - "{{ DeviceUserAgents }}"
      description: |
        Device user agents that the rule will match.
    - name: NotDeviceUserAgents
      value:
        - "{{ NotDeviceUserAgents }}"
      description: |
        Device user agents that the rule will not match. All other device user agents will match.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mobile_device_access_rule"
    values={[
        { label: 'update_mobile_device_access_rule', value: 'update_mobile_device_access_rule' }
    ]}
>
<TabItem value="update_mobile_device_access_rule">

Updates a mobile device access rule for the specified WorkMail organization.

```sql
UPDATE aws.workmail.mobile_device_access_rules
SET 
OrganizationId = '{{ OrganizationId }}',
MobileDeviceAccessRuleId = '{{ MobileDeviceAccessRuleId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Effect = '{{ Effect }}',
DeviceTypes = '{{ DeviceTypes }}',
NotDeviceTypes = '{{ NotDeviceTypes }}',
DeviceModels = '{{ DeviceModels }}',
NotDeviceModels = '{{ NotDeviceModels }}',
DeviceOperatingSystems = '{{ DeviceOperatingSystems }}',
NotDeviceOperatingSystems = '{{ NotDeviceOperatingSystems }}',
DeviceUserAgents = '{{ DeviceUserAgents }}',
NotDeviceUserAgents = '{{ NotDeviceUserAgents }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND MobileDeviceAccessRuleId = '{{ MobileDeviceAccessRuleId }}' --required
AND Name = '{{ Name }}' --required
AND Effect = '{{ Effect }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mobile_device_access_rule"
    values={[
        { label: 'delete_mobile_device_access_rule', value: 'delete_mobile_device_access_rule' }
    ]}
>
<TabItem value="delete_mobile_device_access_rule">

Deletes a mobile device access rule for the specified WorkMail organization. Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.

```sql
DELETE FROM aws.workmail.mobile_device_access_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
