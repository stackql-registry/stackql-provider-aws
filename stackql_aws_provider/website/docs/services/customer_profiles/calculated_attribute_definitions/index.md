--- 
title: calculated_attribute_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - calculated_attribute_definitions
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>calculated_attribute_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="calculated_attribute_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.calculated_attribute_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_calculated_attribute_definition"
    values={[
        { label: 'get_calculated_attribute_definition', value: 'get_calculated_attribute_definition' },
        { label: 'list_calculated_attribute_definitions', value: 'list_calculated_attribute_definitions' }
    ]}
>
<TabItem value="get_calculated_attribute_definition">

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
    <td><CopyableCode code="AttributeDetails" /></td>
    <td><code>object</code></td>
    <td>Mathematical expression and a list of attribute items specified in that expression.</td>
</tr>
<tr>
    <td><CopyableCode code="CalculatedAttributeName" /></td>
    <td><code>string</code></td>
    <td>The unique name of the calculated attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Conditions" /></td>
    <td><code>object</code></td>
    <td>The conditions including range, object count, and threshold for the calculated attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the calculated attribute definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the calculated attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the calculated attribute. (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-\s&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Filter" /></td>
    <td><code>object</code></td>
    <td>Defines how to filter the objects coming in for calculated attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the calculated attribute definition was most recently edited.</td>
</tr>
<tr>
    <td><CopyableCode code="Readiness" /></td>
    <td><code>object</code></td>
    <td>Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.</td>
</tr>
<tr>
    <td><CopyableCode code="Statistic" /></td>
    <td><code>string</code></td>
    <td>The aggregation operation to perform for the calculated attribute. (FIRST_OCCURRENCE, LAST_OCCURRENCE, COUNT, SUM, MINIMUM, MAXIMUM, AVERAGE, MAX_OCCURRENCE)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the Calculated Attribute creation (whether all historical data has been indexed). (PREPARING, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="UseHistoricalData" /></td>
    <td><code>boolean</code></td>
    <td>Whether historical data ingested before the Calculated Attribute was created should be included in calculations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_calculated_attribute_definitions">

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
    <td><CopyableCode code="Items" /></td>
    <td><code>array</code></td>
    <td>The list of calculated attribute definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to ListCalculatedAttributeDefinitions.</td>
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
    <td><a href="#get_calculated_attribute_definition"><CopyableCode code="get_calculated_attribute_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides more information on a calculated attribute definition for Customer Profiles.</td>
</tr>
<tr>
    <td><a href="#list_calculated_attribute_definitions"><CopyableCode code="list_calculated_attribute_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists calculated attribute definitions for Customer Profiles</td>
</tr>
<tr>
    <td><a href="#create_calculated_attribute_definition"><CopyableCode code="create_calculated_attribute_definition" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AttributeDetails"><code>AttributeDetails</code></a></td>
    <td></td>
    <td>Creates a new calculated attribute definition. After creation, new object data ingested into Customer Profiles will be included in the calculated attribute, which can be retrieved for a profile using the GetCalculatedAttributeForProfile API. Defining a calculated attribute makes it available for all profiles within a domain. Each calculated attribute can only reference one ObjectType and at most, two fields from that ObjectType.</td>
</tr>
<tr>
    <td><a href="#update_calculated_attribute_definition"><CopyableCode code="update_calculated_attribute_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing calculated attribute definition. When updating the Conditions, note that increasing the date range of a calculated attribute will not trigger inclusion of historical data greater than the current date range.</td>
</tr>
<tr>
    <td><a href="#delete_calculated_attribute_definition"><CopyableCode code="delete_calculated_attribute_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-calculated_attribute_name"><code>calculated_attribute_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing calculated attribute definition. Note that deleting a default calculated attribute is possible, however once deleted, you will be unable to undo that action and will need to recreate it on your own using the CreateCalculatedAttributeDefinition API if you want it back.</td>
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
<tr id="parameter-calculated_attribute_name">
    <td><CopyableCode code="calculated_attribute_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the calculated attribute.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of calculated attribute definitions returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous call to ListCalculatedAttributeDefinitions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_calculated_attribute_definition"
    values={[
        { label: 'get_calculated_attribute_definition', value: 'get_calculated_attribute_definition' },
        { label: 'list_calculated_attribute_definitions', value: 'list_calculated_attribute_definitions' }
    ]}
>
<TabItem value="get_calculated_attribute_definition">

Provides more information on a calculated attribute definition for Customer Profiles.

```sql
SELECT
AttributeDetails,
CalculatedAttributeName,
Conditions,
CreatedAt,
Description,
DisplayName,
Filter,
LastUpdatedAt,
Readiness,
Statistic,
Status,
Tags,
UseHistoricalData
FROM aws.customer_profiles.calculated_attribute_definitions
WHERE domain_name = '{{ domain_name }}' -- required
AND calculated_attribute_name = '{{ calculated_attribute_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_calculated_attribute_definitions">

Lists calculated attribute definitions for Customer Profiles

```sql
SELECT
Items,
NextToken
FROM aws.customer_profiles.calculated_attribute_definitions
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_calculated_attribute_definition"
    values={[
        { label: 'create_calculated_attribute_definition', value: 'create_calculated_attribute_definition' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_calculated_attribute_definition">

Creates a new calculated attribute definition. After creation, new object data ingested into Customer Profiles will be included in the calculated attribute, which can be retrieved for a profile using the GetCalculatedAttributeForProfile API. Defining a calculated attribute makes it available for all profiles within a domain. Each calculated attribute can only reference one ObjectType and at most, two fields from that ObjectType.

```sql
INSERT INTO aws.customer_profiles.calculated_attribute_definitions (
DisplayName,
Description,
AttributeDetails,
Conditions,
Filter,
Statistic,
UseHistoricalData,
Tags,
domain_name,
calculated_attribute_name,
region
)
SELECT 
'{{ DisplayName }}',
'{{ Description }}',
'{{ AttributeDetails }}' /* required */,
'{{ Conditions }}',
'{{ Filter }}',
'{{ Statistic }}',
{{ UseHistoricalData }},
'{{ Tags }}',
'{{ domain_name }}',
'{{ calculated_attribute_name }}',
'{{ region }}'
RETURNING
AttributeDetails,
CalculatedAttributeName,
Conditions,
CreatedAt,
Description,
DisplayName,
Filter,
LastUpdatedAt,
Readiness,
Statistic,
Status,
Tags,
UseHistoricalData
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: calculated_attribute_definitions
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the calculated_attribute_definitions resource.
    - name: calculated_attribute_name
      value: "{{ calculated_attribute_name }}"
      description: Required parameter for the calculated_attribute_definitions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the calculated_attribute_definitions resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Description
      value: "{{ Description }}"
    - name: AttributeDetails
      description: |
        Mathematical expression and a list of attribute items specified in that expression.
      value:
        Attributes:
          - Name: "{{ Name }}"
        Expression: "{{ Expression }}"
    - name: Conditions
      description: |
        The conditions including range, object count, and threshold for the calculated attribute.
      value:
        Range:
          Value: {{ Value }}
          Unit: "{{ Unit }}"
          ValueRange:
            Start: {{ Start }}
            End: {{ End }}
          TimestampSource: "{{ TimestampSource }}"
          TimestampFormat: "{{ TimestampFormat }}"
        ObjectCount: {{ ObjectCount }}
        Threshold:
          Value: "{{ Value }}"
          Operator: "{{ Operator }}"
    - name: Filter
      description: |
        Defines how to filter the objects coming in for calculated attributes.
      value:
        Include: "{{ Include }}"
        Groups:
          - Type: "{{ Type }}"
            Dimensions: "{{ Dimensions }}"
    - name: Statistic
      value: "{{ Statistic }}"
      valid_values: ['FIRST_OCCURRENCE', 'LAST_OCCURRENCE', 'COUNT', 'SUM', 'MINIMUM', 'MAXIMUM', 'AVERAGE', 'MAX_OCCURRENCE']
    - name: UseHistoricalData
      value: {{ UseHistoricalData }}
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_calculated_attribute_definition"
    values={[
        { label: 'update_calculated_attribute_definition', value: 'update_calculated_attribute_definition' }
    ]}
>
<TabItem value="update_calculated_attribute_definition">

Updates an existing calculated attribute definition. When updating the Conditions, note that increasing the date range of a calculated attribute will not trigger inclusion of historical data greater than the current date range.

```sql
UPDATE aws.customer_profiles.calculated_attribute_definitions
SET 
DisplayName = '{{ DisplayName }}',
Description = '{{ Description }}',
Conditions = '{{ Conditions }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND calculated_attribute_name = '{{ calculated_attribute_name }}' --required
AND region = '{{ region }}' --required
RETURNING
AttributeDetails,
CalculatedAttributeName,
Conditions,
CreatedAt,
Description,
DisplayName,
LastUpdatedAt,
Readiness,
Statistic,
Status,
Tags,
UseHistoricalData;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_calculated_attribute_definition"
    values={[
        { label: 'delete_calculated_attribute_definition', value: 'delete_calculated_attribute_definition' }
    ]}
>
<TabItem value="delete_calculated_attribute_definition">

Deletes an existing calculated attribute definition. Note that deleting a default calculated attribute is possible, however once deleted, you will be unable to undo that action and will need to recreate it on your own using the CreateCalculatedAttributeDefinition API if you want it back.

```sql
DELETE FROM aws.customer_profiles.calculated_attribute_definitions
WHERE domain_name = '{{ domain_name }}' --required
AND calculated_attribute_name = '{{ calculated_attribute_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
