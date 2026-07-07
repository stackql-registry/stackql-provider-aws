--- 
title: license_asset_rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - license_asset_rulesets
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

Creates, updates, deletes, gets or lists a <code>license_asset_rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_asset_rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_asset_rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_asset_ruleset"
    values={[
        { label: 'get_license_asset_ruleset', value: 'get_license_asset_ruleset' },
        { label: 'list_license_asset_rulesets', value: 'list_license_asset_rulesets' }
    ]}
>
<TabItem value="get_license_asset_ruleset">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>License asset ruleset description.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseAssetRulesetArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the license asset ruleset. (pattern: &lt;code&gt;^arn:aws&#91;a-zA-Z-&#93;*:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>License asset ruleset name.</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>array</code></td>
    <td>License asset rules.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_asset_rulesets">

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
    <td><CopyableCode code="LicenseAssetRulesets" /></td>
    <td><code>array</code></td>
    <td>License asset rulesets.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
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
    <td><a href="#get_license_asset_ruleset"><CopyableCode code="get_license_asset_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a license asset ruleset.</td>
</tr>
<tr>
    <td><a href="#list_license_asset_rulesets"><CopyableCode code="list_license_asset_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists license asset rulesets.</td>
</tr>
<tr>
    <td><a href="#create_license_asset_ruleset"><CopyableCode code="create_license_asset_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Rules"><code>Rules</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a license asset ruleset.</td>
</tr>
<tr>
    <td><a href="#update_license_asset_ruleset"><CopyableCode code="update_license_asset_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Rules"><code>Rules</code></a>, <a href="#parameter-LicenseAssetRulesetArn"><code>LicenseAssetRulesetArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Updates a license asset ruleset.</td>
</tr>
<tr>
    <td><a href="#delete_license_asset_ruleset"><CopyableCode code="delete_license_asset_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a license asset ruleset.</td>
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
    defaultValue="get_license_asset_ruleset"
    values={[
        { label: 'get_license_asset_ruleset', value: 'get_license_asset_ruleset' },
        { label: 'list_license_asset_rulesets', value: 'list_license_asset_rulesets' }
    ]}
>
<TabItem value="get_license_asset_ruleset">

Gets a license asset ruleset.

```sql
SELECT
Description,
LicenseAssetRulesetArn,
Name,
Rules
FROM aws.license_manager.license_asset_rulesets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_asset_rulesets">

Lists license asset rulesets.

```sql
SELECT
LicenseAssetRulesets,
NextToken
FROM aws.license_manager.license_asset_rulesets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_asset_ruleset"
    values={[
        { label: 'create_license_asset_ruleset', value: 'create_license_asset_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_asset_ruleset">

Creates a license asset ruleset.

```sql
INSERT INTO aws.license_manager.license_asset_rulesets (
Name,
Description,
Rules,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ Rules }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
LicenseAssetRulesetArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_asset_rulesets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_asset_rulesets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        License asset ruleset name.
    - name: Description
      value: "{{ Description }}"
      description: |
        License asset ruleset description.
    - name: Rules
      description: |
        License asset rules.
      value:
        - RuleStatement:
            LicenseConfigurationRuleStatement:
              AndRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              OrRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              MatchingRuleStatement:
                KeyToMatch: "{{ KeyToMatch }}"
                Constraint: "{{ Constraint }}"
                ValueToMatch:
                  - "{{ ValueToMatch }}"
            LicenseRuleStatement:
              AndRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              OrRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              MatchingRuleStatement:
                KeyToMatch: "{{ KeyToMatch }}"
                Constraint: "{{ Constraint }}"
                ValueToMatch:
                  - "{{ ValueToMatch }}"
            InstanceRuleStatement:
              AndRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              OrRuleStatement:
                MatchingRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Constraint: "{{ Constraint }}"
                    ValueToMatch: "{{ ValueToMatch }}"
                ScriptRuleStatements:
                  - KeyToMatch: "{{ KeyToMatch }}"
                    Script: "{{ Script }}"
              MatchingRuleStatement:
                KeyToMatch: "{{ KeyToMatch }}"
                Constraint: "{{ Constraint }}"
                ValueToMatch:
                  - "{{ ValueToMatch }}"
              ScriptRuleStatement:
                KeyToMatch: "{{ KeyToMatch }}"
                Script: "{{ Script }}"
    - name: Tags
      description: |
        Tags to add to the license asset ruleset.
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
    defaultValue="update_license_asset_ruleset"
    values={[
        { label: 'update_license_asset_ruleset', value: 'update_license_asset_ruleset' }
    ]}
>
<TabItem value="update_license_asset_ruleset">

Updates a license asset ruleset.

```sql
UPDATE aws.license_manager.license_asset_rulesets
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Rules = '{{ Rules }}',
LicenseAssetRulesetArn = '{{ LicenseAssetRulesetArn }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND Rules = '{{ Rules }}' --required
AND LicenseAssetRulesetArn = '{{ LicenseAssetRulesetArn }}' --required
AND ClientToken = '{{ ClientToken }}' --required
RETURNING
LicenseAssetRulesetArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_asset_ruleset"
    values={[
        { label: 'delete_license_asset_ruleset', value: 'delete_license_asset_ruleset' }
    ]}
>
<TabItem value="delete_license_asset_ruleset">

Deletes a license asset ruleset.

```sql
DELETE FROM aws.license_manager.license_asset_rulesets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
