--- 
title: cost_category_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_category_definitions
  - ce
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

Creates, updates, deletes, gets or lists a <code>cost_category_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_category_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_category_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cost_category_definition"
    values={[
        { label: 'describe_cost_category_definition', value: 'describe_cost_category_definition' },
        { label: 'list_cost_category_definitions', value: 'list_cost_category_definitions' }
    ]}
>
<TabItem value="describe_cost_category_definition">

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
    <td><CopyableCode code="CostCategoryArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for your cost category. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultValue" /></td>
    <td><code>string</code></td>
    <td>The default value for the cost category. (pattern: &lt;code&gt;^(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveEnd" /></td>
    <td><code>string</code></td>
    <td>The effective end date of your cost category. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveStart" /></td>
    <td><code>string</code></td>
    <td>The effective start date of your cost category. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the cost category. (pattern: &lt;code&gt;^(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingStatus" /></td>
    <td><code>array</code></td>
    <td>The list of processing statuses for Cost Management products for a specific cost category.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleVersion" /></td>
    <td><code>string</code></td>
    <td>The rule schema version in this particular cost category. (CostCategoryExpression.v1)</td>
</tr>
<tr>
    <td><CopyableCode code="Rules" /></td>
    <td><code>array</code></td>
    <td>The rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that cost category value.</td>
</tr>
<tr>
    <td><CopyableCode code="SplitChargeRules" /></td>
    <td><code>array</code></td>
    <td>The split charge rules that are used to allocate your charges between your cost category values.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cost_category_definitions">

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
    <td><CopyableCode code="CostCategoryArn" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for your cost category. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:&#91;-a-zA-Z0-9/:_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultValue" /></td>
    <td><code>string</code></td>
    <td>The default value for the cost category. (pattern: &lt;code&gt;^(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveEnd" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveStart" /></td>
    <td><code>string</code></td>
    <td>The period of time that you want the usage and costs for. (pattern: &lt;code&gt;^\d&#123;4&#125;-\d\d-\d\dT\d\d:\d\d:\d\d((&#91;+-&#93;\d\d:\d\d)|Z)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the cost category. (pattern: &lt;code&gt;^(?! )&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;Z&#125;-_&#93;*(?&lt;! )$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberOfRules" /></td>
    <td><code>integer</code></td>
    <td>The number of rules that are associated with a specific cost category.</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingStatus" /></td>
    <td><code>array</code></td>
    <td>The list of processing statuses for Cost Management products for a specific cost category.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedResourceTypes" /></td>
    <td><code>array</code></td>
    <td>The resource types supported by a specific cost category.</td>
</tr>
<tr>
    <td><CopyableCode code="Values" /></td>
    <td><code>array</code></td>
    <td>A list of unique cost category values in a specific cost category.</td>
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
    <td><a href="#describe_cost_category_definition"><CopyableCode code="describe_cost_category_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a cost category that's defined in the account. You have the option to use EffectiveOn to return a cost category that's active on a specific date. If there's no EffectiveOn specified, you see a Cost Category that's effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response.</td>
</tr>
<tr>
    <td><a href="#list_cost_category_definitions"><CopyableCode code="list_cost_category_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the name, Amazon Resource Name (ARN), NumberOfRules and effective dates of all cost categories defined in the account. You have the option to use EffectiveOn and SupportedResourceTypes to return a list of cost categories that were active on a specific date. If there is no EffectiveOn specified, you’ll see cost categories that are effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100.</td>
</tr>
<tr>
    <td><a href="#create_cost_category_definition"><CopyableCode code="create_cost_category_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RuleVersion"><code>RuleVersion</code></a>, <a href="#parameter-Rules"><code>Rules</code></a></td>
    <td></td>
    <td>Creates a new cost category with the requested name and rules.</td>
</tr>
<tr>
    <td><a href="#update_cost_category_definition"><CopyableCode code="update_cost_category_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CostCategoryArn"><code>CostCategoryArn</code></a>, <a href="#parameter-RuleVersion"><code>RuleVersion</code></a>, <a href="#parameter-Rules"><code>Rules</code></a></td>
    <td></td>
    <td>Updates an existing cost category. Changes made to the cost category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</td>
</tr>
<tr>
    <td><a href="#delete_cost_category_definition"><CopyableCode code="delete_cost_category_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cost category. Expenses from this month going forward will no longer be categorized with this cost category.</td>
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
    defaultValue="describe_cost_category_definition"
    values={[
        { label: 'describe_cost_category_definition', value: 'describe_cost_category_definition' },
        { label: 'list_cost_category_definitions', value: 'list_cost_category_definitions' }
    ]}
>
<TabItem value="describe_cost_category_definition">

Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a cost category that's defined in the account. You have the option to use EffectiveOn to return a cost category that's active on a specific date. If there's no EffectiveOn specified, you see a Cost Category that's effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response.

```sql
SELECT
CostCategoryArn,
DefaultValue,
EffectiveEnd,
EffectiveStart,
Name,
ProcessingStatus,
RuleVersion,
Rules,
SplitChargeRules
FROM aws.ce.cost_category_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cost_category_definitions">

Returns the name, Amazon Resource Name (ARN), NumberOfRules and effective dates of all cost categories defined in the account. You have the option to use EffectiveOn and SupportedResourceTypes to return a list of cost categories that were active on a specific date. If there is no EffectiveOn specified, you’ll see cost categories that are effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100.

```sql
SELECT
CostCategoryArn,
DefaultValue,
EffectiveEnd,
EffectiveStart,
Name,
NumberOfRules,
ProcessingStatus,
SupportedResourceTypes,
Values
FROM aws.ce.cost_category_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cost_category_definition"
    values={[
        { label: 'create_cost_category_definition', value: 'create_cost_category_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cost_category_definition">

Creates a new cost category with the requested name and rules.

```sql
INSERT INTO aws.ce.cost_category_definitions (
Name,
EffectiveStart,
RuleVersion,
Rules,
DefaultValue,
SplitChargeRules,
ResourceTags,
region
)
SELECT 
'{{ Name }}',
'{{ EffectiveStart }}',
'{{ RuleVersion }}' /* required */,
'{{ Rules }}' /* required */,
'{{ DefaultValue }}',
'{{ SplitChargeRules }}',
'{{ ResourceTags }}',
'{{ region }}'
RETURNING
CostCategoryArn,
EffectiveStart
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cost_category_definitions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cost_category_definitions resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The unique name of the cost category.
    - name: EffectiveStart
      value: "{{ EffectiveStart }}"
      description: |
        The cost category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.
    - name: RuleVersion
      value: "{{ RuleVersion }}"
      description: |
        The rule schema version in this particular cost category.
      valid_values: ['CostCategoryExpression.v1']
    - name: Rules
      description: |
        The cost category rules used to categorize costs. For more information, see CostCategoryRule.
      value:
        - Value: "{{ Value }}"
          Rule:
            Or:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or:
                    - Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not:
                        Or: "{{ Or }}"
                        And: "{{ And }}"
                        Not: "{{ Not }}"
                        Dimensions: "{{ Dimensions }}"
                        Tags: "{{ Tags }}"
                        CostCategories: "{{ CostCategories }}"
                      Dimensions:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      Tags:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      CostCategories:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                  And:
                    - Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not:
                        Or: "{{ Or }}"
                        And: "{{ And }}"
                        Not: "{{ Not }}"
                        Dimensions: "{{ Dimensions }}"
                        Tags: "{{ Tags }}"
                        CostCategories: "{{ CostCategories }}"
                      Dimensions:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      Tags:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      CostCategories:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
            And:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or:
                    - Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not:
                        Or: "{{ Or }}"
                        And: "{{ And }}"
                        Not: "{{ Not }}"
                        Dimensions: "{{ Dimensions }}"
                        Tags: "{{ Tags }}"
                        CostCategories: "{{ CostCategories }}"
                      Dimensions:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      Tags:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      CostCategories:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                  And:
                    - Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not:
                        Or: "{{ Or }}"
                        And: "{{ And }}"
                        Not: "{{ Not }}"
                        Dimensions: "{{ Dimensions }}"
                        Tags: "{{ Tags }}"
                        CostCategories: "{{ CostCategories }}"
                      Dimensions:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      Tags:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                      CostCategories:
                        Key: "{{ Key }}"
                        Values: "{{ Values }}"
                        MatchOptions: "{{ MatchOptions }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values:
                    - "{{ Values }}"
                  MatchOptions:
                    - "{{ MatchOptions }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
          InheritedValue:
            DimensionName: "{{ DimensionName }}"
            DimensionKey: "{{ DimensionKey }}"
          Type: "{{ Type }}"
    - name: DefaultValue
      value: "{{ DefaultValue }}"
      description: |
        The default value for the cost category.
    - name: SplitChargeRules
      description: |
        The split charge rules used to allocate your charges between your cost category values.
      value:
        - Source: "{{ Source }}"
          Targets: "{{ Targets }}"
          Method: "{{ Method }}"
          Parameters: "{{ Parameters }}"
    - name: ResourceTags
      description: |
        An optional list of tags to associate with the specified CostCategory . You can use resource tags to control access to your cost category using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don’t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cost_category_definition"
    values={[
        { label: 'update_cost_category_definition', value: 'update_cost_category_definition' }
    ]}
>
<TabItem value="update_cost_category_definition">

Updates an existing cost category. Changes made to the cost category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.

```sql
UPDATE aws.ce.cost_category_definitions
SET 
CostCategoryArn = '{{ CostCategoryArn }}',
EffectiveStart = '{{ EffectiveStart }}',
RuleVersion = '{{ RuleVersion }}',
Rules = '{{ Rules }}',
DefaultValue = '{{ DefaultValue }}',
SplitChargeRules = '{{ SplitChargeRules }}'
WHERE 
region = '{{ region }}' --required
AND CostCategoryArn = '{{ CostCategoryArn }}' --required
AND RuleVersion = '{{ RuleVersion }}' --required
AND Rules = '{{ Rules }}' --required
RETURNING
CostCategoryArn,
EffectiveStart;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cost_category_definition"
    values={[
        { label: 'delete_cost_category_definition', value: 'delete_cost_category_definition' }
    ]}
>
<TabItem value="delete_cost_category_definition">

Deletes a cost category. Expenses from this month going forward will no longer be categorized with this cost category.

```sql
DELETE FROM aws.ce.cost_category_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
