--- 
title: policies_granting_service_access
hide_title: false
hide_table_of_contents: false
keywords:
  - policies_granting_service_access
  - iam
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

Creates, updates, deletes, gets or lists a <code>policies_granting_service_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies_granting_service_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.policies_granting_service_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policies_granting_service_access"
    values={[
        { label: 'list_policies_granting_service_access', value: 'list_policies_granting_service_access' }
    ]}
>
<TabItem value="list_policies_granting_service_access">

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
    <td><CopyableCode code="policies" /></td>
    <td><code>string</code></td>
    <td>The PoliciesGrantingServiceAccess object that contains details about the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="service_namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the service that was accessed. To learn the service namespace of a service, see Actions, resources, and condition keys for Amazon Web Services services in the Service Authorization Reference. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, (service prefix: a4b). For more information about service namespaces, see Amazon Web Services service namespaces in the Amazon Web Services General Reference.</td>
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
    <td><a href="#list_policies_granting_service_access"><CopyableCode code="list_policies_granting_service_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ServiceNamespaces"><code>ServiceNamespaces</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-Arn"><code>Arn</code></a></td>
    <td>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service. This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. The list of policies returned by the operation depends on the ARN of the identity that you provide. User – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. Group – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included. Role – The list of policies includes only the managed and inline policies that are attached to the role. For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see Managed policies and inline policies in the IAM User Guide. Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the GetUser or GetRole operations.</td>
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
<tr id="parameter-ServiceNamespaces">
    <td><CopyableCode code="ServiceNamespaces" /></td>
    <td><code>array</code></td>
    <td>The service namespace for the Amazon Web Services services whose policies you want to list. To learn the service namespace for a service, see Actions, resources, and condition keys for Amazon Web Services services in the IAM User Guide. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, (service prefix: a4b). For more information about service namespaces, see Amazon Web Services service namespaces in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM identity (user, group, or role) whose policies you want to list.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policies_granting_service_access"
    values={[
        { label: 'list_policies_granting_service_access', value: 'list_policies_granting_service_access' }
    ]}
>
<TabItem value="list_policies_granting_service_access">

Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service. This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see Evaluating policies in the IAM User Guide. The list of policies returned by the operation depends on the ARN of the identity that you provide. User – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. Group – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included. Role – The list of policies includes only the managed and inline policies that are attached to the role. For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see Managed policies and inline policies in the IAM User Guide. Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the GetUser or GetRole operations.

```sql
SELECT
policies,
service_namespace
FROM aws.iam.policies_granting_service_access
WHERE ServiceNamespaces = '{{ ServiceNamespaces }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND Arn = '{{ Arn }}'
;
```
</TabItem>
</Tabs>
