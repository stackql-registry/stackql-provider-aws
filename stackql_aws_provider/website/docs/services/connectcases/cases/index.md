--- 
title: cases
hide_title: false
hide_table_of_contents: false
keywords:
  - cases
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

Creates, updates, deletes, gets or lists a <code>cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case"
    values={[
        { label: 'get_case', value: 'get_case' },
        { label: 'search_cases', value: 'search_cases' }
    ]}
>
<TabItem value="get_case">

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
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>A list of detailed field information.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of a template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_cases">

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
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the case.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>List of case field values.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of a template.</td>
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
    <td><a href="#get_case"><CopyableCode code="get_case" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific case if it exists.</td>
</tr>
<tr>
    <td><a href="#search_cases"><CopyableCode code="search_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents. For customer_id you must provide the full customer profile ARN in this format: arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID.</td>
</tr>
<tr>
    <td><a href="#create_case"><CopyableCode code="create_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-templateId"><code>templateId</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td></td>
    <td>If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types. When creating a case from a template that has tag propagation configurations, the specified tags are automatically applied to the case. The following fields are required when creating a case: customer_id - You must provide the full customer profile ARN in this format: arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID title</td>
</tr>
<tr>
    <td><a href="#update_case"><CopyableCode code="update_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td></td>
    <td>If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the CreateCase input . If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</td>
</tr>
<tr>
    <td><a href="#delete_case"><CopyableCode code="delete_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot: Retrieve related items Access audit history Perform any operations that require the CaseID This action is irreversible. After you delete a case, you cannot recover its data.</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the case.</td>
</tr>
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the Cases domain.</td>
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
    defaultValue="get_case"
    values={[
        { label: 'get_case', value: 'get_case' },
        { label: 'search_cases', value: 'search_cases' }
    ]}
>
<TabItem value="get_case">

Returns information about a specific case if it exists.

```sql
SELECT
fields,
next_token,
tags,
template_id
FROM aws.connectcases.cases
WHERE case_id = '{{ case_id }}' -- required
AND domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_cases">

Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents. For customer_id you must provide the full customer profile ARN in this format: arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID.

```sql
SELECT
case_id,
fields,
tags,
template_id
FROM aws.connectcases.cases
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case"
    values={[
        { label: 'create_case', value: 'create_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case">

If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types. When creating a case from a template that has tag propagation configurations, the specified tags are automatically applied to the case. The following fields are required when creating a case: customer_id - You must provide the full customer profile ARN in this format: arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID title

```sql
INSERT INTO aws.connectcases.cases (
templateId,
fields,
clientToken,
performedBy,
tags,
domain_id,
region
)
SELECT 
'{{ templateId }}' /* required */,
'{{ fields }}' /* required */,
'{{ clientToken }}',
'{{ performedBy }}',
'{{ tags }}',
'{{ domain_id }}',
'{{ region }}'
RETURNING
case_arn,
case_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cases
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the cases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cases resource.
    - name: templateId
      value: "{{ templateId }}"
    - name: fields
      value:
        - id: "{{ id }}"
          value:
            stringValue: "{{ stringValue }}"
            doubleValue: {{ doubleValue }}
            booleanValue: {{ booleanValue }}
            emptyValue: "{{ emptyValue }}"
            userArnValue: "{{ userArnValue }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: performedBy
      description: |
        Represents the entity that performed the action.
      value:
        userArn: "{{ userArn }}"
        customEntity: "{{ customEntity }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_case"
    values={[
        { label: 'update_case', value: 'update_case' }
    ]}
>
<TabItem value="update_case">

If you provide a value for PerformedBy.UserArn you must also have connect:DescribeUser permission on the User ARN resource that you provide Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the CreateCase input . If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.

```sql
UPDATE aws.connectcases.cases
SET 
fields = '{{ fields }}',
performedBy = '{{ performedBy }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND case_id = '{{ case_id }}' --required
AND region = '{{ region }}' --required
AND fields = '{{ fields }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_case"
    values={[
        { label: 'delete_case', value: 'delete_case' }
    ]}
>
<TabItem value="delete_case">

The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot: Retrieve related items Access audit history Perform any operations that require the CaseID This action is irreversible. After you delete a case, you cannot recover its data.

```sql
DELETE FROM aws.connectcases.cases
WHERE domain_id = '{{ domain_id }}' --required
AND case_id = '{{ case_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
