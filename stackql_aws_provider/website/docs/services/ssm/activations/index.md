--- 
title: activations
hide_title: false
hide_table_of_contents: false
keywords:
  - activations
  - ssm
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

Creates, updates, deletes, gets or lists an <code>activations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.activations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_activations"
    values={[
        { label: 'describe_activations', value: 'describe_activations' }
    ]}
>
<TabItem value="describe_activations">

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
    <td><CopyableCode code="activation_id" /></td>
    <td><code>string</code></td>
    <td>The ID created by Systems Manager when you submitted the activation. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the activation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_instance_name" /></td>
    <td><code>string</code></td>
    <td>A name for the managed node when it is created. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A user defined description of the activation.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this activation can no longer be used to register managed nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the activation is expired.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role" /></td>
    <td><code>string</code></td>
    <td>The Identity and Access Management (IAM) role to assign to the managed node.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of managed nodes that can be registered using this activation.</td>
</tr>
<tr>
    <td><CopyableCode code="registrations_count" /></td>
    <td><code>integer</code></td>
    <td>The number of managed nodes already registered with this activation.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags assigned to the activation.</td>
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
    <td><a href="#describe_activations"><CopyableCode code="describe_activations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.</td>
</tr>
<tr>
    <td><a href="#create_activation"><CopyableCode code="create_activation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IamRole"><code>IamRole</code></a></td>
    <td></td>
    <td>Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager tools. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see Using Amazon Web Services Systems Manager in hybrid and multicloud environments in the Amazon Web Services Systems Manager User Guide. Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called managed nodes.</td>
</tr>
<tr>
    <td><a href="#delete_activation"><CopyableCode code="delete_activation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.</td>
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
    defaultValue="describe_activations"
    values={[
        { label: 'describe_activations', value: 'describe_activations' }
    ]}
>
<TabItem value="describe_activations">

Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.

```sql
SELECT
activation_id,
created_date,
default_instance_name,
description,
expiration_date,
expired,
iam_role,
registration_limit,
registrations_count,
tags
FROM aws.ssm.activations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_activation"
    values={[
        { label: 'create_activation', value: 'create_activation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_activation">

Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager tools. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see Using Amazon Web Services Systems Manager in hybrid and multicloud environments in the Amazon Web Services Systems Manager User Guide. Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called managed nodes.

```sql
INSERT INTO aws.ssm.activations (
Description,
DefaultInstanceName,
IamRole,
RegistrationLimit,
ExpirationDate,
Tags,
RegistrationMetadata,
region
)
SELECT 
'{{ Description }}',
'{{ DefaultInstanceName }}',
'{{ IamRole }}' /* required */,
{{ RegistrationLimit }},
'{{ ExpirationDate }}',
'{{ Tags }}',
'{{ RegistrationMetadata }}',
'{{ region }}'
RETURNING
activation_code,
activation_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: activations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the activations resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        A user-defined description of the resource that you want to register with Systems Manager. Don't enter personally identifiable information in this field.
    - name: DefaultInstanceName
      value: "{{ DefaultInstanceName }}"
      description: |
        The name of the registered, managed node as it will appear in the Amazon Web Services Systems Manager console or when you use the Amazon Web Services command line tools to list Systems Manager resources. Don't enter personally identifiable information in this field.
    - name: IamRole
      value: "{{ IamRole }}"
      description: |
        The name of the Identity and Access Management (IAM) role that you want to assign to the managed node. This IAM role must provide AssumeRole permissions for the Amazon Web Services Systems Manager service principal ssm.amazonaws.com. For more information, see Create the IAM service role required for Systems Manager in a hybrid and multicloud environments in the Amazon Web Services Systems Manager User Guide. You can't specify an IAM service-linked role for this parameter. You must create a unique role.
    - name: RegistrationLimit
      value: {{ RegistrationLimit }}
      description: |
        Specify the maximum number of managed nodes you want to register. The default value is 1.
    - name: ExpirationDate
      value: "{{ ExpirationDate }}"
      description: |
        The date by which this activation request should expire, in timestamp format, such as "2024-07-07T00:00:00". You can specify a date up to 30 days in advance. If you don't provide an expiration date, the activation code expires in 24 hours.
    - name: Tags
      description: |
        Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an activation to identify which servers or virtual machines (VMs) in your on-premises environment you intend to activate. In this case, you could specify the following key-value pairs: Key=OS,Value=Windows Key=Environment,Value=Production When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID and code. When you specify the activation ID and code, tags assigned to the activation are automatically applied to the on-premises servers or VMs. You can't add tags to or delete tags from an existing activation. You can tag your on-premises servers, edge devices, and VMs after they connect to Systems Manager for the first time and are assigned a managed node ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that is prefixed with "mi-". For information about how to add tags to your managed nodes, see AddTagsToResource. For information about how to remove tags from your managed nodes, see RemoveTagsFromResource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: RegistrationMetadata
      description: |
        Reserved for internal use.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_activation"
    values={[
        { label: 'delete_activation', value: 'delete_activation' }
    ]}
>
<TabItem value="delete_activation">

Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.

```sql
DELETE FROM aws.ssm.activations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
