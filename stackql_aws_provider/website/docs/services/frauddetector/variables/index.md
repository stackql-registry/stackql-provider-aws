--- 
title: variables
hide_title: false
hide_table_of_contents: false
keywords:
  - variables
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

Creates, updates, deletes, gets or lists a <code>variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.variables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_variable"
    values={[
        { label: 'batch_get_variable', value: 'batch_get_variable' },
        { label: 'get_variables', value: 'get_variables' }
    ]}
>
<TabItem value="batch_get_variable">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The errors from the request.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>The returned variables.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_variables">

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
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td>The names of the variables returned.</td>
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
    <td><a href="#batch_get_variable"><CopyableCode code="batch_get_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a batch of variables.</td>
</tr>
<tr>
    <td><a href="#get_variables"><CopyableCode code="get_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#create_variable"><CopyableCode code="create_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-dataType"><code>dataType</code></a>, <a href="#parameter-dataSource"><code>dataSource</code></a>, <a href="#parameter-defaultValue"><code>defaultValue</code></a></td>
    <td></td>
    <td>Creates a variable.</td>
</tr>
<tr>
    <td><a href="#update_variable"><CopyableCode code="update_variable" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a variable.</td>
</tr>
<tr>
    <td><a href="#delete_variable"><CopyableCode code="delete_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a variable. You can't delete variables that are included in an event type in Amazon Fraud Detector. Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually. When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="batch_get_variable"
    values={[
        { label: 'batch_get_variable', value: 'batch_get_variable' },
        { label: 'get_variables', value: 'get_variables' }
    ]}
>
<TabItem value="batch_get_variable">

Gets a batch of variables.

```sql
SELECT
errors,
variables
FROM aws.frauddetector.variables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_variables">

Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning.

```sql
SELECT
next_token,
variables
FROM aws.frauddetector.variables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_variable"
    values={[
        { label: 'create_variable', value: 'create_variable' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_variable">

Creates a variable.

```sql
INSERT INTO aws.frauddetector.variables (
name,
dataType,
dataSource,
defaultValue,
description,
variableType,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ dataType }}' /* required */,
'{{ dataSource }}' /* required */,
'{{ defaultValue }}' /* required */,
'{{ description }}',
'{{ variableType }}',
'{{ tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: variables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the variables resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the variable.
    - name: dataType
      value: "{{ dataType }}"
      description: |
        The data type of the variable.
      valid_values: ['STRING', 'INTEGER', 'FLOAT', 'BOOLEAN', 'DATETIME']
    - name: dataSource
      value: "{{ dataSource }}"
      description: |
        The source of the data.
      valid_values: ['EVENT', 'MODEL_SCORE', 'EXTERNAL_MODEL_SCORE']
    - name: defaultValue
      value: "{{ defaultValue }}"
      description: |
        The default value for the variable when no value is received.
    - name: description
      value: "{{ description }}"
      description: |
        The description.
    - name: variableType
      value: "{{ variableType }}"
      description: |
        The variable type. For more information see Variable types. Valid Values: AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT
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
    defaultValue="update_variable"
    values={[
        { label: 'update_variable', value: 'update_variable' }
    ]}
>
<TabItem value="update_variable">

Updates a variable.

```sql
UPDATE aws.frauddetector.variables
SET 
name = '{{ name }}',
defaultValue = '{{ defaultValue }}',
description = '{{ description }}',
variableType = '{{ variableType }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_variable"
    values={[
        { label: 'delete_variable', value: 'delete_variable' }
    ]}
>
<TabItem value="delete_variable">

Deletes a variable. You can't delete variables that are included in an event type in Amazon Fraud Detector. Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually. When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.variables
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
