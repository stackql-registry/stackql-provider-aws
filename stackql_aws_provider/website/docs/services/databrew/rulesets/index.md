--- 
title: rulesets
hide_title: false
hide_table_of_contents: false
keywords:
  - rulesets
  - databrew
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

Creates, updates, deletes, gets or lists a <code>rulesets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rulesets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.rulesets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ruleset"
    values={[
        { label: 'describe_ruleset', value: 'describe_ruleset' },
        { label: 'list_rulesets', value: 'list_rulesets' }
    ]}
>
<TabItem value="describe_ruleset">

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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ruleset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification date and time of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_rulesets">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the ruleset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The modification date and time of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="rule_count" /></td>
    <td><code>integer</code></td>
    <td>The number of rules that are defined in the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the ruleset.</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.</td>
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
    <td><a href="#describe_ruleset"><CopyableCode code="describe_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about the ruleset.</td>
</tr>
<tr>
    <td><a href="#list_rulesets"><CopyableCode code="list_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List all rulesets available in the current account or rulesets associated with a specific resource (dataset).</td>
</tr>
<tr>
    <td><a href="#create_ruleset"><CopyableCode code="create_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TargetArn"><code>TargetArn</code></a></td>
    <td></td>
    <td>Creates a new ruleset that can be used in a profile job to validate the data quality of a dataset.</td>
</tr>
<tr>
    <td><a href="#update_ruleset"><CopyableCode code="update_ruleset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates specified ruleset.</td>
</tr>
<tr>
    <td><a href="#delete_ruleset"><CopyableCode code="delete_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a ruleset.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.</td>
</tr>
<tr id="parameter-targetArn">
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter indicates to return only those rulesets that are associated with the specified resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ruleset"
    values={[
        { label: 'describe_ruleset', value: 'describe_ruleset' },
        { label: 'list_rulesets', value: 'list_rulesets' }
    ]}
>
<TabItem value="describe_ruleset">

Retrieves detailed information about the ruleset.

```sql
SELECT
create_date,
created_by,
description,
last_modified_by,
last_modified_date,
name,
resource_arn,
rules,
tags,
target_arn
FROM aws.databrew.rulesets
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_rulesets">

List all rulesets available in the current account or rulesets associated with a specific resource (dataset).

```sql
SELECT
account_id,
create_date,
created_by,
description,
last_modified_by,
last_modified_date,
name,
resource_arn,
rule_count,
tags,
target_arn
FROM aws.databrew.rulesets
WHERE region = '{{ region }}' -- required
AND targetArn = '{{ targetArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ruleset"
    values={[
        { label: 'create_ruleset', value: 'create_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ruleset">

Creates a new ruleset that can be used in a profile job to validate the data quality of a dataset.

```sql
INSERT INTO aws.databrew.rulesets (
Name,
Description,
TargetArn,
Rules,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ TargetArn }}' /* required */,
'{{ Rules }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rulesets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rulesets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: TargetArn
      value: "{{ TargetArn }}"
    - name: Rules
      value:
        - Name: "{{ Name }}"
          Disabled: {{ Disabled }}
          CheckExpression: "{{ CheckExpression }}"
          SubstitutionMap: "{{ SubstitutionMap }}"
          Threshold:
            Value: {{ Value }}
            Type: "{{ Type }}"
            Unit: "{{ Unit }}"
          ColumnSelectors: "{{ ColumnSelectors }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ruleset"
    values={[
        { label: 'update_ruleset', value: 'update_ruleset' }
    ]}
>
<TabItem value="update_ruleset">

Updates specified ruleset.

```sql
UPDATE aws.databrew.rulesets
SET 
Description = '{{ Description }}',
Rules = '{{ Rules }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ruleset"
    values={[
        { label: 'delete_ruleset', value: 'delete_ruleset' }
    ]}
>
<TabItem value="delete_ruleset">

Deletes a ruleset.

```sql
DELETE FROM aws.databrew.rulesets
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
