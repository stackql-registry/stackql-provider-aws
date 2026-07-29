--- 
title: configured_table_association_analysis_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - configured_table_association_analysis_rules
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

Creates, updates, deletes, gets or lists a <code>configured_table_association_analysis_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configured_table_association_analysis_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanrooms.configured_table_association_analysis_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configured_table_association_analysis_rule"
    values={[
        { label: 'get_configured_table_association_analysis_rule', value: 'get_configured_table_association_analysis_rule' }
    ]}
>
<TabItem value="get_configured_table_association_analysis_rule">

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
    <td><CopyableCode code="configured_table_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured table association. (pattern: &lt;code&gt;arn:aws:&#91;\w&#93;+:&#91;\w&#93;&#123;2&#125;-&#91;\w&#93;&#123;4,9&#125;-&#91;\d&#93;:&#91;\d&#93;&#123;12&#125;:configuredtableassociation/&#91;\d\w-&#93;+/&#91;\d\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configured_table_association_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the configured table association. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the configured table association analysis rule.</td>
</tr>
<tr>
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>The membership identifier for the configured table association analysis rule. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>Controls on the query specifications that can be run on an associated configured table.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the configured table association analysis rule. (AGGREGATION, LIST, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The update time of the configured table association analysis rule.</td>
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
    <td><a href="#get_configured_table_association_analysis_rule"><CopyableCode code="get_configured_table_association_analysis_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the analysis rule for a configured table association.</td>
</tr>
<tr>
    <td><a href="#create_configured_table_association_analysis_rule"><CopyableCode code="create_configured_table_association_analysis_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analysisRuleType"><code>analysisRuleType</code></a>, <a href="#parameter-analysisRulePolicy"><code>analysisRulePolicy</code></a></td>
    <td></td>
    <td>Creates a new analysis rule for an associated configured table.</td>
</tr>
<tr>
    <td><a href="#update_configured_table_association_analysis_rule"><CopyableCode code="update_configured_table_association_analysis_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analysisRulePolicy"><code>analysisRulePolicy</code></a></td>
    <td></td>
    <td>Updates the analysis rule for a configured table association.</td>
</tr>
<tr>
    <td><a href="#delete_configured_table_association_analysis_rule"><CopyableCode code="delete_configured_table_association_analysis_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-membership_identifier"><code>membership_identifier</code></a>, <a href="#parameter-configured_table_association_identifier"><code>configured_table_association_identifier</code></a>, <a href="#parameter-analysis_rule_type"><code>analysis_rule_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an analysis rule for a configured table association.</td>
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
    <td>The type of the analysis rule that you want to delete.</td>
</tr>
<tr id="parameter-configured_table_association_identifier">
    <td><CopyableCode code="configured_table_association_identifier" /></td>
    <td><code>string</code></td>
    <td>The identiﬁer for the conﬁgured table association that's related to the analysis rule that you want to delete.</td>
</tr>
<tr id="parameter-membership_identifier">
    <td><CopyableCode code="membership_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.</td>
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
    defaultValue="get_configured_table_association_analysis_rule"
    values={[
        { label: 'get_configured_table_association_analysis_rule', value: 'get_configured_table_association_analysis_rule' }
    ]}
>
<TabItem value="get_configured_table_association_analysis_rule">

Retrieves the analysis rule for a configured table association.

```sql
SELECT
configured_table_association_arn,
configured_table_association_id,
create_time,
membership_identifier,
policy,
type_,
update_time
FROM aws.cleanrooms.configured_table_association_analysis_rules
WHERE membership_identifier = '{{ membership_identifier }}' -- required
AND configured_table_association_identifier = '{{ configured_table_association_identifier }}' -- required
AND analysis_rule_type = '{{ analysis_rule_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configured_table_association_analysis_rule"
    values={[
        { label: 'create_configured_table_association_analysis_rule', value: 'create_configured_table_association_analysis_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configured_table_association_analysis_rule">

Creates a new analysis rule for an associated configured table.

```sql
INSERT INTO aws.cleanrooms.configured_table_association_analysis_rules (
analysisRuleType,
analysisRulePolicy,
membership_identifier,
configured_table_association_identifier,
region
)
SELECT 
'{{ analysisRuleType }}' /* required */,
'{{ analysisRulePolicy }}' /* required */,
'{{ membership_identifier }}',
'{{ configured_table_association_identifier }}',
'{{ region }}'
RETURNING
analysis_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configured_table_association_analysis_rules
  props:
    - name: membership_identifier
      value: "{{ membership_identifier }}"
      description: Required parameter for the configured_table_association_analysis_rules resource.
    - name: configured_table_association_identifier
      value: "{{ configured_table_association_identifier }}"
      description: Required parameter for the configured_table_association_analysis_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configured_table_association_analysis_rules resource.
    - name: analysisRuleType
      value: "{{ analysisRuleType }}"
      valid_values: ['AGGREGATION', 'LIST', 'CUSTOM']
    - name: analysisRulePolicy
      description: |
        Controls on the query specifications that can be run on an associated configured table.
      value:
        v1:
          list:
            allowedResultReceivers:
              - "{{ allowedResultReceivers }}"
            allowedAdditionalAnalyses:
              - "{{ allowedAdditionalAnalyses }}"
          aggregation:
            allowedResultReceivers:
              - "{{ allowedResultReceivers }}"
            allowedAdditionalAnalyses:
              - "{{ allowedAdditionalAnalyses }}"
          custom:
            allowedResultReceivers:
              - "{{ allowedResultReceivers }}"
            allowedAdditionalAnalyses:
              - "{{ allowedAdditionalAnalyses }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configured_table_association_analysis_rule"
    values={[
        { label: 'update_configured_table_association_analysis_rule', value: 'update_configured_table_association_analysis_rule' }
    ]}
>
<TabItem value="update_configured_table_association_analysis_rule">

Updates the analysis rule for a configured table association.

```sql
UPDATE aws.cleanrooms.configured_table_association_analysis_rules
SET 
analysisRulePolicy = '{{ analysisRulePolicy }}'
WHERE 
membership_identifier = '{{ membership_identifier }}' --required
AND configured_table_association_identifier = '{{ configured_table_association_identifier }}' --required
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
    defaultValue="delete_configured_table_association_analysis_rule"
    values={[
        { label: 'delete_configured_table_association_analysis_rule', value: 'delete_configured_table_association_analysis_rule' }
    ]}
>
<TabItem value="delete_configured_table_association_analysis_rule">

Deletes an analysis rule for a configured table association.

```sql
DELETE FROM aws.cleanrooms.configured_table_association_analysis_rules
WHERE membership_identifier = '{{ membership_identifier }}' --required
AND configured_table_association_identifier = '{{ configured_table_association_identifier }}' --required
AND analysis_rule_type = '{{ analysis_rule_type }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
