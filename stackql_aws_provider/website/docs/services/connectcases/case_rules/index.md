--- 
title: case_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - case_rules
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>case_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.case_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_case_rule"
    values={[
        { label: 'batch_get_case_rule', value: 'batch_get_case_rule' },
        { label: 'list_case_rules', value: 'list_case_rules' }
    ]}
>
<TabItem value="batch_get_case_rule">

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
    <td><CopyableCode code="caseRules" /></td>
    <td><code>array</code></td>
    <td>A list of detailed case rule information.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of case rule errors.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessedCaseRules" /></td>
    <td><code>array</code></td>
    <td>A list of unprocessed case rule identifiers.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_case_rules">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the case rule. (pattern: &lt;code&gt;.*&#91;\S&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="caseRuleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the case rule.</td>
</tr>
<tr>
    <td><CopyableCode code="caseRuleId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of a case rule.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of a case rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>Possible types for a rule. (Required, Hidden, FieldOptions)</td>
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
    <td><a href="#batch_get_case_rule"><CopyableCode code="batch_get_case_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.</td>
</tr>
<tr>
    <td><a href="#list_case_rules"><CopyableCode code="list_case_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.</td>
</tr>
<tr>
    <td><a href="#create_case_rule"><CopyableCode code="create_case_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-rule"><code>rule</code></a></td>
    <td></td>
    <td>Creates a new case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.</td>
</tr>
<tr>
    <td><a href="#update_case_rule"><CopyableCode code="update_case_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_rule_id"><code>case_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.</td>
</tr>
<tr>
    <td><a href="#delete_case_rule"><CopyableCode code="delete_case_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_rule_id"><code>case_rule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.</td>
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
<tr id="parameter-case_rule_id">
    <td><CopyableCode code="case_rule_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of a case rule.</td>
</tr>
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of a Cases domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_case_rule"
    values={[
        { label: 'batch_get_case_rule', value: 'batch_get_case_rule' },
        { label: 'list_case_rules', value: 'list_case_rules' }
    ]}
>
<TabItem value="batch_get_case_rule">

Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.

```sql
SELECT
caseRules,
errors,
unprocessedCaseRules
FROM aws.connectcases.case_rules
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_case_rules">

Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.

```sql
SELECT
name,
caseRuleArn,
caseRuleId,
description,
ruleType
FROM aws.connectcases.case_rules
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case_rule"
    values={[
        { label: 'create_case_rule', value: 'create_case_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_rule">

Creates a new case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.

```sql
INSERT INTO aws.connectcases.case_rules (
name,
description,
rule,
domain_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ rule }}' /* required */,
'{{ domain_id }}',
'{{ region }}'
RETURNING
caseRuleArn,
caseRuleId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: case_rules
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the case_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the case_rules resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: rule
      description: |
        Represents what rule type should take place, under what conditions. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.
      value:
        required_:
          defaultValue: {{ defaultValue }}
          conditions:
            - equalTo:
                operandOne:
                  fieldId: "{{ fieldId }}"
                operandTwo:
                  stringValue: "{{ stringValue }}"
                  booleanValue: {{ booleanValue }}
                  doubleValue: {{ doubleValue }}
                  emptyValue: "{{ emptyValue }}"
                result: {{ result }}
              notEqualTo:
                operandOne:
                  fieldId: "{{ fieldId }}"
                operandTwo:
                  stringValue: "{{ stringValue }}"
                  booleanValue: {{ booleanValue }}
                  doubleValue: {{ doubleValue }}
                  emptyValue: "{{ emptyValue }}"
                result: {{ result }}
              andAll:
                conditions:
                  - equalTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    notEqualTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    andAll:
                      conditions: "{{ conditions }}"
                    orAll:
                      conditions: "{{ conditions }}"
              orAll:
                conditions:
                  - equalTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    notEqualTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    andAll:
                      conditions: "{{ conditions }}"
                    orAll:
                      conditions: "{{ conditions }}"
        fieldOptions:
          parentFieldId: "{{ parentFieldId }}"
          childFieldId: "{{ childFieldId }}"
          parentChildFieldOptionsMappings:
            - parentFieldOptionValue: "{{ parentFieldOptionValue }}"
              childFieldOptionValues: "{{ childFieldOptionValues }}"
        hidden:
          defaultValue: {{ defaultValue }}
          conditions:
            - equalTo:
                operandOne:
                  fieldId: "{{ fieldId }}"
                operandTwo:
                  stringValue: "{{ stringValue }}"
                  booleanValue: {{ booleanValue }}
                  doubleValue: {{ doubleValue }}
                  emptyValue: "{{ emptyValue }}"
                result: {{ result }}
              notEqualTo:
                operandOne:
                  fieldId: "{{ fieldId }}"
                operandTwo:
                  stringValue: "{{ stringValue }}"
                  booleanValue: {{ booleanValue }}
                  doubleValue: {{ doubleValue }}
                  emptyValue: "{{ emptyValue }}"
                result: {{ result }}
              andAll:
                conditions:
                  - equalTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    notEqualTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    andAll:
                      conditions: "{{ conditions }}"
                    orAll:
                      conditions: "{{ conditions }}"
              orAll:
                conditions:
                  - equalTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    notEqualTo:
                      operandOne: "{{ operandOne }}"
                      operandTwo: "{{ operandTwo }}"
                      result: {{ result }}
                    andAll:
                      conditions: "{{ conditions }}"
                    orAll:
                      conditions: "{{ conditions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_case_rule"
    values={[
        { label: 'update_case_rule', value: 'update_case_rule' }
    ]}
>
<TabItem value="update_case_rule">

Updates a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.

```sql
UPDATE aws.connectcases.case_rules
SET 
name = '{{ name }}',
description = '{{ description }}',
rule = '{{ rule }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND case_rule_id = '{{ case_rule_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case_rule"
    values={[
        { label: 'delete_case_rule', value: 'delete_case_rule' }
    ]}
>
<TabItem value="delete_case_rule">

Deletes a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.

```sql
DELETE FROM aws.connectcases.case_rules
WHERE domain_id = '{{ domain_id }}' --required
AND case_rule_id = '{{ case_rule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
