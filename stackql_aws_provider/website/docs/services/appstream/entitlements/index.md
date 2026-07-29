--- 
title: entitlements
hide_title: false
hide_table_of_contents: false
keywords:
  - entitlements
  - appstream
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

Creates, updates, deletes, gets or lists an <code>entitlements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entitlements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.entitlements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_entitlements"
    values={[
        { label: 'describe_entitlements', value: 'describe_entitlements' }
    ]}
>
<TabItem value="describe_entitlements">

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
    <td><CopyableCode code="entitlements" /></td>
    <td><code>array</code></td>
    <td>The entitlements.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
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
    <td><a href="#describe_entitlements"><CopyableCode code="describe_entitlements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one of more entitlements.</td>
</tr>
<tr>
    <td><a href="#create_entitlement"><CopyableCode code="create_entitlement" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-AppVisibility"><code>AppVisibility</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a></td>
    <td></td>
    <td>Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. WorkSpaces Applications user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.</td>
</tr>
<tr>
    <td><a href="#associate_application_to_entitlement"><CopyableCode code="associate_application_to_entitlement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-EntitlementName"><code>EntitlementName</code></a>, <a href="#parameter-ApplicationIdentifier"><code>ApplicationIdentifier</code></a></td>
    <td></td>
    <td>Associates an application to entitle.</td>
</tr>
<tr>
    <td><a href="#update_entitlement"><CopyableCode code="update_entitlement" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-StackName"><code>StackName</code></a></td>
    <td></td>
    <td>Updates the specified entitlement.</td>
</tr>
<tr>
    <td><a href="#delete_entitlement"><CopyableCode code="delete_entitlement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified entitlement.</td>
</tr>
<tr>
    <td><a href="#disassociate_application_from_entitlement"><CopyableCode code="disassociate_application_from_entitlement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-EntitlementName"><code>EntitlementName</code></a>, <a href="#parameter-ApplicationIdentifier"><code>ApplicationIdentifier</code></a></td>
    <td></td>
    <td>Deletes the specified application from the specified entitlement.</td>
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
    defaultValue="describe_entitlements"
    values={[
        { label: 'describe_entitlements', value: 'describe_entitlements' }
    ]}
>
<TabItem value="describe_entitlements">

Retrieves a list that describes one of more entitlements.

```sql
SELECT
entitlements,
next_token
FROM aws.appstream.entitlements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_entitlement"
    values={[
        { label: 'create_entitlement', value: 'create_entitlement' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_entitlement">

Creates a new entitlement. Entitlements control access to specific applications within a stack, based on user attributes. Entitlements apply to SAML 2.0 federated user identities. WorkSpaces Applications user pool and streaming URL users are entitled to all applications in a stack. Entitlements don't apply to the desktop stream view application, or to applications managed by a dynamic app provider using the Dynamic Application Framework.

```sql
INSERT INTO aws.appstream.entitlements (
Name,
StackName,
Description,
AppVisibility,
Attributes,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ StackName }}' /* required */,
'{{ Description }}',
'{{ AppVisibility }}' /* required */,
'{{ Attributes }}' /* required */,
'{{ region }}'
RETURNING
entitlement
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entitlements
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the entitlements resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the entitlement.
    - name: StackName
      value: "{{ StackName }}"
      description: |
        The name of the stack with which the entitlement is associated.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the entitlement.
    - name: AppVisibility
      value: "{{ AppVisibility }}"
      description: |
        Specifies whether all or selected apps are entitled.
      valid_values: ['ALL', 'ASSOCIATED']
    - name: Attributes
      description: |
        The attributes of the entitlement.
      value:
        - Name: "{{ Name }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_application_to_entitlement"
    values={[
        { label: 'associate_application_to_entitlement', value: 'associate_application_to_entitlement' },
        { label: 'update_entitlement', value: 'update_entitlement' }
    ]}
>
<TabItem value="associate_application_to_entitlement">

Associates an application to entitle.

```sql
UPDATE aws.appstream.entitlements
SET 
StackName = '{{ StackName }}',
EntitlementName = '{{ EntitlementName }}',
ApplicationIdentifier = '{{ ApplicationIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND StackName = '{{ StackName }}' --required
AND EntitlementName = '{{ EntitlementName }}' --required
AND ApplicationIdentifier = '{{ ApplicationIdentifier }}' --required;
```
</TabItem>
<TabItem value="update_entitlement">

Updates the specified entitlement.

```sql
UPDATE aws.appstream.entitlements
SET 
Name = '{{ Name }}',
StackName = '{{ StackName }}',
Description = '{{ Description }}',
AppVisibility = '{{ AppVisibility }}',
Attributes = '{{ Attributes }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND StackName = '{{ StackName }}' --required
RETURNING
entitlement;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entitlement"
    values={[
        { label: 'delete_entitlement', value: 'delete_entitlement' }
    ]}
>
<TabItem value="delete_entitlement">

Deletes the specified entitlement.

```sql
DELETE FROM aws.appstream.entitlements
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_application_from_entitlement"
    values={[
        { label: 'disassociate_application_from_entitlement', value: 'disassociate_application_from_entitlement' }
    ]}
>
<TabItem value="disassociate_application_from_entitlement">

Deletes the specified application from the specified entitlement.

```sql
EXEC aws.appstream.entitlements.disassociate_application_from_entitlement 
@region='{{ region }}' --required 
@@json=
'{
"StackName": "{{ StackName }}", 
"EntitlementName": "{{ EntitlementName }}", 
"ApplicationIdentifier": "{{ ApplicationIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
