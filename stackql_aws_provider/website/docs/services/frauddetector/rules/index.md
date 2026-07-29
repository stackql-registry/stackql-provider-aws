--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rules"
    values={[
        { label: 'get_rules', value: 'get_rules' }
    ]}
>
<TabItem value="get_rules">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next page token to be used in subsequent requests.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_details" /></td>
    <td><code>array</code></td>
    <td>The details of the requested rule.</td>
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
    <td><a href="#get_rules"><CopyableCode code="get_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified. This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#create_rule"><CopyableCode code="create_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ruleId"><code>ruleId</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-expression"><code>expression</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-outcomes"><code>outcomes</code></a></td>
    <td></td>
    <td>Creates a rule for use with the specified detector.</td>
</tr>
<tr>
    <td><a href="#update_rule_version"><CopyableCode code="update_rule_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rule"><code>rule</code></a>, <a href="#parameter-expression"><code>expression</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-outcomes"><code>outcomes</code></a></td>
    <td></td>
    <td>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).</td>
</tr>
<tr>
    <td><a href="#update_rule_metadata"><CopyableCode code="update_rule_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rule"><code>rule</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Updates a rule's metadata. The description attribute can be updated.</td>
</tr>
<tr>
    <td><a href="#delete_rule"><CopyableCode code="delete_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version. When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="get_rules"
    values={[
        { label: 'get_rules', value: 'get_rules' }
    ]}
>
<TabItem value="get_rules">

Get all rules for a detector (paginated) if ruleId and ruleVersion are not specified. Gets all rules for the detector and the ruleId if present (paginated). Gets a specific rule if both the ruleId and the ruleVersion are specified. This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.

```sql
SELECT
next_token,
rule_details
FROM aws.frauddetector.rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_rule"
    values={[
        { label: 'create_rule', value: 'create_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_rule">

Creates a rule for use with the specified detector.

```sql
INSERT INTO aws.frauddetector.rules (
ruleId,
detectorId,
description,
expression,
language,
outcomes,
tags,
region
)
SELECT 
'{{ ruleId }}' /* required */,
'{{ detectorId }}' /* required */,
'{{ description }}',
'{{ expression }}' /* required */,
'{{ language }}' /* required */,
'{{ outcomes }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rules resource.
    - name: ruleId
      value: "{{ ruleId }}"
      description: |
        The rule ID.
    - name: detectorId
      value: "{{ detectorId }}"
      description: |
        The detector ID for the rule's parent detector.
    - name: description
      value: "{{ description }}"
      description: |
        The rule description.
    - name: expression
      value: "{{ expression }}"
      description: |
        The rule expression.
    - name: language
      value: "{{ language }}"
      description: |
        The language of the rule.
      valid_values: ['DETECTORPL']
    - name: outcomes
      value:
        - "{{ outcomes }}"
      description: |
        The outcome or outcomes returned when the rule expression matches.
    - name: tags
      description: |
        A collection of key and value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_rule_version"
    values={[
        { label: 'update_rule_version', value: 'update_rule_version' },
        { label: 'update_rule_metadata', value: 'update_rule_metadata' }
    ]}
>
<TabItem value="update_rule_version">

Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).

```sql
UPDATE aws.frauddetector.rules
SET 
rule = '{{ rule }}',
description = '{{ description }}',
expression = '{{ expression }}',
language = '{{ language }}',
outcomes = '{{ outcomes }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND rule = '{{ rule }}' --required
AND expression = '{{ expression }}' --required
AND language = '{{ language }}' --required
AND outcomes = '{{ outcomes }}' --required
RETURNING
rule;
```
</TabItem>
<TabItem value="update_rule_metadata">

Updates a rule's metadata. The description attribute can be updated.

```sql
UPDATE aws.frauddetector.rules
SET 
rule = '{{ rule }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND rule = '{{ rule }}' --required
AND description = '{{ description }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_rule"
    values={[
        { label: 'delete_rule', value: 'delete_rule' }
    ]}
>
<TabItem value="delete_rule">

Deletes the rule. You cannot delete a rule if it is used by an ACTIVE or INACTIVE detector version. When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
