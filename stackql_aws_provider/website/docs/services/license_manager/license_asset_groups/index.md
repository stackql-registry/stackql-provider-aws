--- 
title: license_asset_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - license_asset_groups
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_asset_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_asset_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_asset_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_asset_group"
    values={[
        { label: 'get_license_asset_group', value: 'get_license_asset_group' },
        { label: 'list_license_asset_groups', value: 'list_license_asset_groups' }
    ]}
>
<TabItem value="get_license_asset_group">

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
    <td><CopyableCode code="associated_license_asset_ruleset_arns" /></td>
    <td><code>array</code></td>
    <td>ARNs of associated license asset rulesets.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>License asset group description.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_resource_discovery_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest resource discovery time.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_usage_analysis_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Latest usage analysis time.</td>
</tr>
<tr>
    <td><CopyableCode code="license_asset_group_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license asset group. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="license_asset_group_configurations" /></td>
    <td><code>array</code></td>
    <td>License asset group configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>License asset group name.</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>License asset group properties.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>License asset group status. (ACTIVE, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>License asset group status message.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_asset_groups">

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
    <td><CopyableCode code="license_asset_groups" /></td>
    <td><code>array</code></td>
    <td>License asset groups.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
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
    <td><a href="#get_license_asset_group"><CopyableCode code="get_license_asset_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a license asset group.</td>
</tr>
<tr>
    <td><a href="#list_license_asset_groups"><CopyableCode code="list_license_asset_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists license asset groups.</td>
</tr>
<tr>
    <td><a href="#create_license_asset_group"><CopyableCode code="create_license_asset_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-LicenseAssetGroupConfigurations"><code>LicenseAssetGroupConfigurations</code></a>, <a href="#parameter-AssociatedLicenseAssetRulesetARNs"><code>AssociatedLicenseAssetRulesetARNs</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a license asset group.</td>
</tr>
<tr>
    <td><a href="#update_license_asset_group"><CopyableCode code="update_license_asset_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AssociatedLicenseAssetRulesetARNs"><code>AssociatedLicenseAssetRulesetARNs</code></a>, <a href="#parameter-LicenseAssetGroupArn"><code>LicenseAssetGroupArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Updates a license asset group.</td>
</tr>
<tr>
    <td><a href="#delete_license_asset_group"><CopyableCode code="delete_license_asset_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a license asset group.</td>
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
    defaultValue="get_license_asset_group"
    values={[
        { label: 'get_license_asset_group', value: 'get_license_asset_group' },
        { label: 'list_license_asset_groups', value: 'list_license_asset_groups' }
    ]}
>
<TabItem value="get_license_asset_group">

Gets a license asset group.

```sql
SELECT
associated_license_asset_ruleset_arns,
description,
latest_resource_discovery_time,
latest_usage_analysis_time,
license_asset_group_arn,
license_asset_group_configurations,
name,
properties,
status,
status_message
FROM aws.license_manager.license_asset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_asset_groups">

Lists license asset groups.

```sql
SELECT
license_asset_groups,
next_token
FROM aws.license_manager.license_asset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_asset_group"
    values={[
        { label: 'create_license_asset_group', value: 'create_license_asset_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_asset_group">

Creates a license asset group.

```sql
INSERT INTO aws.license_manager.license_asset_groups (
Name,
Description,
LicenseAssetGroupConfigurations,
AssociatedLicenseAssetRulesetARNs,
Properties,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ LicenseAssetGroupConfigurations }}' /* required */,
'{{ AssociatedLicenseAssetRulesetARNs }}' /* required */,
'{{ Properties }}',
'{{ Tags }}',
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
license_asset_group_arn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_asset_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_asset_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        License asset group name.
    - name: Description
      value: "{{ Description }}"
      description: |
        License asset group description.
    - name: LicenseAssetGroupConfigurations
      description: |
        License asset group configurations.
      value:
        - UsageDimension: "{{ UsageDimension }}"
    - name: AssociatedLicenseAssetRulesetARNs
      value:
        - "{{ AssociatedLicenseAssetRulesetARNs }}"
      description: |
        ARNs of associated license asset rulesets.
    - name: Properties
      description: |
        License asset group properties.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Tags
      description: |
        Tags to add to the license asset group.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_license_asset_group"
    values={[
        { label: 'update_license_asset_group', value: 'update_license_asset_group' }
    ]}
>
<TabItem value="update_license_asset_group">

Updates a license asset group.

```sql
UPDATE aws.license_manager.license_asset_groups
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
LicenseAssetGroupConfigurations = '{{ LicenseAssetGroupConfigurations }}',
AssociatedLicenseAssetRulesetARNs = '{{ AssociatedLicenseAssetRulesetARNs }}',
Properties = '{{ Properties }}',
LicenseAssetGroupArn = '{{ LicenseAssetGroupArn }}',
Status = '{{ Status }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND AssociatedLicenseAssetRulesetARNs = '{{ AssociatedLicenseAssetRulesetARNs }}' --required
AND LicenseAssetGroupArn = '{{ LicenseAssetGroupArn }}' --required
AND ClientToken = '{{ ClientToken }}' --required
RETURNING
license_asset_group_arn,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_asset_group"
    values={[
        { label: 'delete_license_asset_group', value: 'delete_license_asset_group' }
    ]}
>
<TabItem value="delete_license_asset_group">

Deletes a license asset group.

```sql
DELETE FROM aws.license_manager.license_asset_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
