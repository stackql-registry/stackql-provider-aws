--- 
title: intermediate_table_analysis_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - intermediate_table_analysis_rules
  - cleanrooms
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

Creates, updates, deletes, gets or lists an <code>intermediate_table_analysis_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="intermediate_table_analysis_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.intermediate_table_analysis_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_intermediate_table_analysis_rule"
    values={[
        { label: 'get_intermediate_table_analysis_rule', value: 'get_intermediate_table_analysis_rule' }
    ]}
>
<TabItem value="get_intermediate_table_analysis_rule">

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
    <td><CopyableCode code="analysis_rule_policy" /></td>
    <td><code>object</code></td>
    <td>Contains the policy for an intermediate table analysis rule.</td>
</tr>
<tr>
    <td><CopyableCode code="analysis_rule_type" /></td>
    <td><code>string</code></td>
    <td>The type of the analysis rule. (CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis rule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="intermediate_table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the intermediate table associated with this analysis rule. (pattern: &lt;code&gt;arn:aws:cleanrooms:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:membership\/&#91;\d\w-&#93;+\/intermediatetable\/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intermediate_table_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the intermediate table associated with this analysis rule. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the analysis rule was last updated.</td>
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
    <td><a href="#get_intermediate_table_analysis_rule"><CopyableCode code="get_intermediate_table_analysis_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the analysis rule for an intermediate table.</td>
</tr>
<tr>
    <td><a href="#create_intermediate_table_analysis_rule"><CopyableCode code="create_intermediate_table_analysis_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analysisRuleType"><code>analysisRuleType</code></a>, <a href="#parameter-analysisRulePolicy"><code>analysisRulePolicy</code></a></td>
    <td></td>
    <td>Creates an analysis rule for an intermediate table. Only the CUSTOM analysis rule type is supported. Only the intermediate table owner can call this operation.</td>
</tr>
<tr>
    <td><a href="#update_intermediate_table_analysis_rule"><CopyableCode code="update_intermediate_table_analysis_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analysisRulePolicy"><code>analysisRulePolicy</code></a></td>
    <td></td>
    <td>Updates the analysis rule policy for an intermediate table. Only the intermediate table owner can call this operation.</td>
</tr>
<tr>
    <td><a href="#delete_intermediate_table_analysis_rule"><CopyableCode code="delete_intermediate_table_analysis_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-intermediate_table_identifier"><code>intermediate_table_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an analysis rule from an intermediate table. After the analysis rule is deleted, the intermediate table becomes unqueryable until a new analysis rule is attached. Only the intermediate table owner can call this operation.</td>
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
<tr id="parameter-analysis_rule_type">
    <td><CopyableCode code="analysis_rule_type" /></td>
    <td><code>string</code></td>
    <td>The type of analysis rule to delete. Currently, only CUSTOM is supported.</td>
</tr>
<tr id="parameter-intermediate_table_identifier">
    <td><CopyableCode code="intermediate_table_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the intermediate table from which to delete the analysis rule.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the membership that contains the intermediate table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_intermediate_table_analysis_rule"
    values={[
        { label: 'get_intermediate_table_analysis_rule', value: 'get_intermediate_table_analysis_rule' }
    ]}
>
<TabItem value="get_intermediate_table_analysis_rule">

Retrieves the analysis rule for an intermediate table.

```sql
SELECT
analysis_rule_policy,
analysis_rule_type,
create_time,
intermediate_table_arn,
intermediate_table_identifier,
update_time
FROM aws.cleanrooms.intermediate_table_analysis_rules
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND intermediate_table_identifier = '{{ intermediate_table_identifier }}' -- required
AND analysis_rule_type = '{{ analysis_rule_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_intermediate_table_analysis_rule"
    values={[
        { label: 'create_intermediate_table_analysis_rule', value: 'create_intermediate_table_analysis_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_intermediate_table_analysis_rule">

Creates an analysis rule for an intermediate table. Only the CUSTOM analysis rule type is supported. Only the intermediate table owner can call this operation.

```sql
INSERT INTO aws.cleanrooms.intermediate_table_analysis_rules (
analysisRuleType,
analysisRulePolicy,
membership_identifier,
intermediate_table_identifier,
region
)
SELECT 
'{{ analysisRuleType }}' /* required */,
'{{ analysisRulePolicy }}' /* required */,
'{{ membership_identifier }}',
'{{ intermediate_table_identifier }}',
'{{ region }}'
RETURNING
analysis_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: intermediate_table_analysis_rules
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the intermediate_table_analysis_rules resource.
    - name: intermediate_table_identifier
      value: "{{ intermediate_table_identifier }}"
      description: Required parameter for the intermediate_table_analysis_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the intermediate_table_analysis_rules resource.
    - name: analysisRuleType
      value: "{{ analysisRuleType }}"
      valid_values: ['CUSTOM']
    - name: analysisRulePolicy
      description: |
        Contains the policy for an intermediate table analysis rule.
      value:
        v1:
          custom:
            allowedAnalyses:
              - "{{ allowedAnalyses }}"
            additionalAnalyses: "{{ additionalAnalyses }}"
            allowedAdditionalAnalyses:
              - "{{ allowedAdditionalAnalyses }}"
            allowedAnalysisProviders:
              - "{{ allowedAnalysisProviders }}"
            allowedResultReceivers:
              - "{{ allowedResultReceivers }}"
            differentialPrivacy:
              columns:
                - name: "{{ name }}"
            disallowedOutputColumns:
              - "{{ disallowedOutputColumns }}"
            aggregationThresholds:
              - identityColumns: "{{ identityColumns }}"
                minimumIdentityCount: {{ minimumIdentityCount }}
                type_: "{{ type_ }}"
                outputColumnThresholds: "{{ outputColumnThresholds }}"
                allowedAggregateExpressionType: "{{ allowedAggregateExpressionType }}"
            comparisonControls:
              allowedLiteralComparisonColumns:
                - "{{ allowedLiteralComparisonColumns }}"
              allowedColumnComparisonColumns:
                - "{{ allowedColumnComparisonColumns }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_intermediate_table_analysis_rule"
    values={[
        { label: 'update_intermediate_table_analysis_rule', value: 'update_intermediate_table_analysis_rule' }
    ]}
>
<TabItem value="update_intermediate_table_analysis_rule">

Updates the analysis rule policy for an intermediate table. Only the intermediate table owner can call this operation.

```sql
UPDATE aws.cleanrooms.intermediate_table_analysis_rules
SET 
analysisRulePolicy = '{{ analysisRulePolicy }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND intermediate_table_identifier = '{{ intermediate_table_identifier }}' --required
AND analysis_rule_type = '{{ analysis_rule_type }}' --required
AND region = '{{ region }}' --required
AND analysisRulePolicy = '{{ analysisRulePolicy }}' --required
RETURNING
analysis_rule;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_intermediate_table_analysis_rule"
    values={[
        { label: 'delete_intermediate_table_analysis_rule', value: 'delete_intermediate_table_analysis_rule' }
    ]}
>
<TabItem value="delete_intermediate_table_analysis_rule">

Deletes an analysis rule from an intermediate table. After the analysis rule is deleted, the intermediate table becomes unqueryable until a new analysis rule is attached. Only the intermediate table owner can call this operation.

```sql
DELETE FROM aws.cleanrooms.intermediate_table_analysis_rules
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND intermediate_table_identifier = '{{ intermediate_table_identifier }}' --required
AND analysis_rule_type = '{{ analysis_rule_type }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
