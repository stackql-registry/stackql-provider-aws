--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - cloudcontrol
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudcontrol.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource"
    values={[
        { label: 'get_resource', value: 'get_resource' }
    ]}
>
<TabItem value="get_resource">

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
    <td><CopyableCode code="ResourceDescription" /></td>
    <td><code>object</code></td>
    <td>Represents information about a provisioned resource.</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource type. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#123;2,64&#125;::&#91;A-Za-z0-9&#93;&#123;2,64&#125;::&#91;A-Za-z0-9&#93;&#123;2,64&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_resource"><CopyableCode code="get_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the current state of the specified resource. For details, see Reading a resource's current state. You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</td>
</tr>
<tr>
    <td><a href="#create_resource"><CopyableCode code="create_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-DesiredState"><code>DesiredState</code></a></td>
    <td></td>
    <td>Creates the specified resource. For more information, see Creating a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource creation request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent type returned by CreateResource.</td>
</tr>
<tr>
    <td><a href="#update_resource"><CopyableCode code="update_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-PatchDocument"><code>PatchDocument</code></a></td>
    <td></td>
    <td>Updates the specified property values in the resource. You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the RFC 6902 - JavaScript Object Notation (JSON) Patch standard. For details on how Cloud Control API performs resource update operations, see Updating a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource update request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent returned by UpdateResource. For more information about the properties of a specific resource, refer to the related topic for the resource in the Resource and property types reference in the CloudFormation Users Guide.</td>
</tr>
<tr>
    <td><a href="#delete_resource"><CopyableCode code="delete_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified resource. For details, see Deleting a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource deletion request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent returned by DeleteResource.</td>
</tr>
<tr>
    <td><a href="#cancel_resource_request"><CopyableCode code="cancel_resource_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RequestToken"><code>RequestToken</code></a></td>
    <td></td>
    <td>Cancels the specified resource operation request. For more information, see Canceling resource operation requests in the Amazon Web Services Cloud Control API User Guide. Only resource operations requests with a status of PENDING or IN_PROGRESS can be canceled.</td>
</tr>
<tr>
    <td><a href="#list_resources"><CopyableCode code="list_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a></td>
    <td></td>
    <td>Returns information about the specified resources. For more information, see Discovering resources in the Amazon Web Services Cloud Control API User Guide. You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</td>
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
    defaultValue="get_resource"
    values={[
        { label: 'get_resource', value: 'get_resource' }
    ]}
>
<TabItem value="get_resource">

Returns information about the current state of the specified resource. For details, see Reading a resource's current state. You can use this action to return information about an existing resource in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.

```sql
SELECT
ResourceDescription,
TypeName
FROM aws.cloudcontrol.resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource"
    values={[
        { label: 'create_resource', value: 'create_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource">

Creates the specified resource. For more information, see Creating a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource creation request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent type returned by CreateResource.

```sql
INSERT INTO aws.cloudcontrol.resources (
TypeName,
TypeVersionId,
RoleArn,
ClientToken,
DesiredState,
region
)
SELECT 
'{{ TypeName }}' /* required */,
'{{ TypeVersionId }}',
'{{ RoleArn }}',
'{{ ClientToken }}',
'{{ DesiredState }}' /* required */,
'{{ region }}'
RETURNING
ProgressEvent
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: TypeName
      value: "{{ TypeName }}"
      description: |
        The name of the resource type.
    - name: TypeVersionId
      value: "{{ TypeVersionId }}"
      description: |
        For private resource types, the type version to use in this resource operation. If you do not specify a resource version, CloudFormation uses the default version.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role for Cloud Control API to use when performing this resource operation. The role specified must have the permissions required for this operation. The necessary permissions for each event handler are defined in the handlers section of the resource type definition schema. If you do not specify a role, Cloud Control API uses a temporary session created using your Amazon Web Services user credentials. For more information, see Specifying credentials in the Amazon Web Services Cloud Control API User Guide.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier to ensure the idempotency of the resource request. As a best practice, specify this token to ensure idempotency, so that Amazon Web Services Cloud Control API can accurately distinguish between request retries and new resource requests. You might retry a resource request to ensure that it was successfully received. A client token is valid for 36 hours once used. After that, a resource request with the same client token is treated as a new request. If you do not specify a client token, one is generated for inclusion in the request. For more information, see Ensuring resource operation requests are unique in the Amazon Web Services Cloud Control API User Guide.
    - name: DesiredState
      value: "{{ DesiredState }}"
      description: |
        Structured data format representing the desired state of the resource, consisting of that resource's properties and their desired values. Cloud Control API currently supports JSON as a structured data format. Specify the desired state as one of the following: A JSON blob A local path containing the desired state in JSON data format For more information, see Composing the desired state of the resource in the Amazon Web Services Cloud Control API User Guide. For more information about the properties of a specific resource, refer to the related topic for the resource in the Resource and property types reference in the CloudFormation Users Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource"
    values={[
        { label: 'update_resource', value: 'update_resource' }
    ]}
>
<TabItem value="update_resource">

Updates the specified property values in the resource. You specify your resource property updates as a list of patch operations contained in a JSON patch document that adheres to the RFC 6902 - JavaScript Object Notation (JSON) Patch standard. For details on how Cloud Control API performs resource update operations, see Updating a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource update request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent returned by UpdateResource. For more information about the properties of a specific resource, refer to the related topic for the resource in the Resource and property types reference in the CloudFormation Users Guide.

```sql
UPDATE aws.cloudcontrol.resources
SET 
TypeName = '{{ TypeName }}',
TypeVersionId = '{{ TypeVersionId }}',
RoleArn = '{{ RoleArn }}',
ClientToken = '{{ ClientToken }}',
Identifier = '{{ Identifier }}',
PatchDocument = '{{ PatchDocument }}'
WHERE 
region = '{{ region }}' --required
AND TypeName = '{{ TypeName }}' --required
AND PatchDocument = '{{ PatchDocument }}' --required
RETURNING
ProgressEvent;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource"
    values={[
        { label: 'delete_resource', value: 'delete_resource' }
    ]}
>
<TabItem value="delete_resource">

Deletes the specified resource. For details, see Deleting a resource in the Amazon Web Services Cloud Control API User Guide. After you have initiated a resource deletion request, you can monitor the progress of your request by calling GetResourceRequestStatus using the RequestToken of the ProgressEvent returned by DeleteResource.

```sql
DELETE FROM aws.cloudcontrol.resources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_resource_request"
    values={[
        { label: 'cancel_resource_request', value: 'cancel_resource_request' },
        { label: 'list_resources', value: 'list_resources' }
    ]}
>
<TabItem value="cancel_resource_request">

Cancels the specified resource operation request. For more information, see Canceling resource operation requests in the Amazon Web Services Cloud Control API User Guide. Only resource operations requests with a status of PENDING or IN_PROGRESS can be canceled.

```sql
EXEC aws.cloudcontrol.resources.cancel_resource_request 
@region='{{ region }}' --required 
@@json=
'{
"RequestToken": "{{ RequestToken }}"
}'
;
```
</TabItem>
<TabItem value="list_resources">

Returns information about the specified resources. For more information, see Discovering resources in the Amazon Web Services Cloud Control API User Guide. You can use this action to return information about existing resources in your account and Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.

```sql
EXEC aws.cloudcontrol.resources.list_resources 
@region='{{ region }}' --required 
@@json=
'{
"TypeName": "{{ TypeName }}", 
"TypeVersionId": "{{ TypeVersionId }}", 
"RoleArn": "{{ RoleArn }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"ResourceModel": "{{ ResourceModel }}"
}'
;
```
</TabItem>
</Tabs>
