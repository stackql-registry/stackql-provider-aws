--- 
title: instance_access_control_attribute_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_access_control_attribute_configurations
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>instance_access_control_attribute_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_access_control_attribute_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.instance_access_control_attribute_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_access_control_attribute_configuration"
    values={[
        { label: 'describe_instance_access_control_attribute_configuration', value: 'describe_instance_access_control_attribute_configuration' }
    ]}
>
<TabItem value="describe_instance_access_control_attribute_configuration">

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
    <td><CopyableCode code="InstanceAccessControlAttributeConfiguration" /></td>
    <td><code>object</code></td>
    <td>Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the attribute configuration process. (ENABLED, CREATION_IN_PROGRESS, CREATION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Provides more details about the current status of the specified attribute.</td>
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
    <td><a href="#describe_instance_access_control_attribute_configuration"><CopyableCode code="describe_instance_access_control_attribute_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#create_instance_access_control_attribute_configuration"><CopyableCode code="create_instance_access_control_attribute_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-InstanceAccessControlAttributeConfiguration"><code>InstanceAccessControlAttributeConfiguration</code></a></td>
    <td></td>
    <td>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide. After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created.</td>
</tr>
<tr>
    <td><a href="#update_instance_access_control_attribute_configuration"><CopyableCode code="update_instance_access_control_attribute_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-InstanceAccessControlAttributeConfiguration"><code>InstanceAccessControlAttributeConfiguration</code></a></td>
    <td></td>
    <td>Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance_access_control_attribute_configuration"><CopyableCode code="delete_instance_access_control_attribute_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.</td>
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
    defaultValue="describe_instance_access_control_attribute_configuration"
    values={[
        { label: 'describe_instance_access_control_attribute_configuration', value: 'describe_instance_access_control_attribute_configuration' }
    ]}
>
<TabItem value="describe_instance_access_control_attribute_configuration">

Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.

```sql
SELECT
InstanceAccessControlAttributeConfiguration,
Status,
StatusReason
FROM aws.sso_admin.instance_access_control_attribute_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_access_control_attribute_configuration"
    values={[
        { label: 'create_instance_access_control_attribute_configuration', value: 'create_instance_access_control_attribute_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_access_control_attribute_configuration">

Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide. After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created.

```sql
INSERT INTO aws.sso_admin.instance_access_control_attribute_configurations (
InstanceArn,
InstanceAccessControlAttributeConfiguration,
region
)
SELECT 
'{{ InstanceArn }}' /* required */,
'{{ InstanceAccessControlAttributeConfiguration }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_access_control_attribute_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_access_control_attribute_configurations resource.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The ARN of the IAM Identity Center instance under which the operation will be executed.
    - name: InstanceAccessControlAttributeConfiguration
      description: |
        Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When using an external identity provider as an identity source, you can pass attributes through the SAML assertion. Doing so provides an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center will replace the attribute value with the value from the IAM Identity Center identity store.
      value:
        AccessControlAttributes:
          - Key: "{{ Key }}"
            Value:
              Source:
                - "{{ Source }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance_access_control_attribute_configuration"
    values={[
        { label: 'update_instance_access_control_attribute_configuration', value: 'update_instance_access_control_attribute_configuration' }
    ]}
>
<TabItem value="update_instance_access_control_attribute_configuration">

Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.

```sql
UPDATE aws.sso_admin.instance_access_control_attribute_configurations
SET 
InstanceArn = '{{ InstanceArn }}',
InstanceAccessControlAttributeConfiguration = '{{ InstanceAccessControlAttributeConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND InstanceAccessControlAttributeConfiguration = '{{ InstanceAccessControlAttributeConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_access_control_attribute_configuration"
    values={[
        { label: 'delete_instance_access_control_attribute_configuration', value: 'delete_instance_access_control_attribute_configuration' }
    ]}
>
<TabItem value="delete_instance_access_control_attribute_configuration">

Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.

```sql
DELETE FROM aws.sso_admin.instance_access_control_attribute_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
