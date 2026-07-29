--- 
title: automation_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - automation_rules
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

Creates, updates, deletes, gets or lists an <code>automation_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automation_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.automation_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_automation_rules"
    values={[
        { label: 'batch_get_automation_rules', value: 'batch_get_automation_rules' },
        { label: 'list_automation_rules', value: 'list_automation_rules' }
    ]}
>
<TabItem value="batch_get_automation_rules">

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
    <td>A list of rule details for the provided rule ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_automation_rules" /></td>
    <td><code>array</code></td>
    <td>A list of objects containing RuleArn, ErrorCode, and ErrorMessage. This parameter tells you which automation rules the request didn't retrieve and why.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automation_rules">

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
    <td><CopyableCode code="automation_rules_metadata" /></td>
    <td><code>array</code></td>
    <td>Metadata for rules in the calling account. The response includes rules with a RuleStatus of ENABLED and DISABLED.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the response.</td>
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
    <td><a href="#batch_get_automation_rules"><CopyableCode code="batch_get_automation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of details for automation rules based on rule Amazon Resource Names (ARNs).</td>
</tr>
<tr>
    <td><a href="#list_automation_rules"><CopyableCode code="list_automation_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>A list of automation rules and their metadata for the calling account.</td>
</tr>
<tr>
    <td><a href="#create_automation_rule"><CopyableCode code="create_automation_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleOrder"><code>RuleOrder</code></a>, <a href="#parameter-RuleName"><code>RuleName</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Criteria"><code>Criteria</code></a>, <a href="#parameter-Actions"><code>Actions</code></a></td>
    <td></td>
    <td>Creates an automation rule based on input parameters.</td>
</tr>
<tr>
    <td><a href="#batch_delete_automation_rules"><CopyableCode code="batch_delete_automation_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AutomationRulesArns"><code>AutomationRulesArns</code></a></td>
    <td></td>
    <td>Deletes one or more automation rules.</td>
</tr>
<tr>
    <td><a href="#batch_update_automation_rules"><CopyableCode code="batch_update_automation_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateAutomationRulesRequestItems"><code>UpdateAutomationRulesRequestItems</code></a></td>
    <td></td>
    <td>Updates one or more automation rules based on rule Amazon Resource Names (ARNs) and input parameters.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of rules to return in the response. This currently ranges from 1 to 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token to specify where to start paginating the response. This is the NextToken from a previously truncated response. On your first call to the ListAutomationRules API, set the value of this parameter to NULL.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_automation_rules"
    values={[
        { label: 'batch_get_automation_rules', value: 'batch_get_automation_rules' },
        { label: 'list_automation_rules', value: 'list_automation_rules' }
    ]}
>
<TabItem value="batch_get_automation_rules">

Retrieves a list of details for automation rules based on rule Amazon Resource Names (ARNs).

```sql
SELECT
rules,
unprocessed_automation_rules
FROM aws.securityhub.automation_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automation_rules">

A list of automation rules and their metadata for the calling account.

```sql
SELECT
automation_rules_metadata,
next_token
FROM aws.securityhub.automation_rules
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automation_rule"
    values={[
        { label: 'create_automation_rule', value: 'create_automation_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automation_rule">

Creates an automation rule based on input parameters.

```sql
INSERT INTO aws.securityhub.automation_rules (
Tags,
RuleStatus,
RuleOrder,
RuleName,
Description,
IsTerminal,
Criteria,
Actions,
region
)
SELECT 
'{{ Tags }}',
'{{ RuleStatus }}',
{{ RuleOrder }} /* required */,
'{{ RuleName }}' /* required */,
'{{ Description }}' /* required */,
{{ IsTerminal }},
'{{ Criteria }}' /* required */,
'{{ Actions }}' /* required */,
'{{ region }}'
RETURNING
rule_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: automation_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the automation_rules resource.
    - name: Tags
      value: "{{ Tags }}"
    - name: RuleStatus
      value: "{{ RuleStatus }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: RuleOrder
      value: {{ RuleOrder }}
    - name: RuleName
      value: "{{ RuleName }}"
    - name: Description
      value: "{{ Description }}"
    - name: IsTerminal
      value: {{ IsTerminal }}
    - name: Criteria
      description: |
        The criteria that determine which findings a rule applies to.
      value:
        ProductArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        AwsAccountId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Id:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        GeneratorId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Type:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        FirstObservedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        LastObservedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        CreatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        UpdatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        Confidence:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        Criticality:
          - Gte: {{ Gte }}
            Lte: {{ Lte }}
            Eq: {{ Eq }}
            Gt: {{ Gt }}
            Lt: {{ Lt }}
        Title:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        Description:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        SourceUrl:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ProductName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        CompanyName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        SeverityLabel:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceType:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourcePartition:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceRegion:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceTags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceDetailsOther:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceStatus:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceSecurityControlId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ComplianceAssociatedStandardsId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        VerificationState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        WorkflowStatus:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RecordState:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RelatedFindingsProductArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        RelatedFindingsId:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NoteText:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        NoteUpdatedAt:
          - Start: "{{ Start }}"
            End: "{{ End }}"
            DateRange:
              Value: {{ Value }}
              Unit: "{{ Unit }}"
              Comparison: "{{ Comparison }}"
        NoteUpdatedBy:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        UserDefinedFields:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceApplicationArn:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        ResourceApplicationName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
        AwsAccountName:
          - Value: "{{ Value }}"
            Comparison: "{{ Comparison }}"
    - name: Actions
      value:
        - Type: "{{ Type }}"
          FindingFieldsUpdate:
            Note:
              Text: "{{ Text }}"
              UpdatedBy: "{{ UpdatedBy }}"
            Severity:
              Normalized: {{ Normalized }}
              Product: {{ Product }}
              Label: "{{ Label }}"
            VerificationState: "{{ VerificationState }}"
            Confidence: {{ Confidence }}
            Criticality: {{ Criticality }}
            Types:
              - "{{ Types }}"
            UserDefinedFields: "{{ UserDefinedFields }}"
            Workflow:
              Status: "{{ Status }}"
            RelatedFindings:
              - ProductArn: "{{ ProductArn }}"
                Id: "{{ Id }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_automation_rules"
    values={[
        { label: 'batch_delete_automation_rules', value: 'batch_delete_automation_rules' },
        { label: 'batch_update_automation_rules', value: 'batch_update_automation_rules' }
    ]}
>
<TabItem value="batch_delete_automation_rules">

Deletes one or more automation rules.

```sql
EXEC aws.securityhub.automation_rules.batch_delete_automation_rules 
@region='{{ region }}' --required 
@@json=
'{
"AutomationRulesArns": "{{ AutomationRulesArns }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_automation_rules">

Updates one or more automation rules based on rule Amazon Resource Names (ARNs) and input parameters.

```sql
EXEC aws.securityhub.automation_rules.batch_update_automation_rules 
@region='{{ region }}' --required 
@@json=
'{
"UpdateAutomationRulesRequestItems": "{{ UpdateAutomationRulesRequestItems }}"
}'
;
```
</TabItem>
</Tabs>
