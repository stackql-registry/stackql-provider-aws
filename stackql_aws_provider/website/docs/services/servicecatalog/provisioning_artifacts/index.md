--- 
title: provisioning_artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_artifacts
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>provisioning_artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioning_artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.provisioning_artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_provisioning_artifacts"
    values={[
        { label: 'list_provisioning_artifacts', value: 'list_provisioning_artifacts' },
        { label: 'describe_provisioning_artifact', value: 'describe_provisioning_artifact' }
    ]}
>
<TabItem value="list_provisioning_artifacts">

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
    <td><CopyableCode code="NextPageToken" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningArtifactDetails" /></td>
    <td><code>array</code></td>
    <td>Information about the provisioning artifacts.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_provisioning_artifact">

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
    <td><CopyableCode code="Info" /></td>
    <td><code>object</code></td>
    <td>The URL of the CloudFormation template in Amazon S3 or GitHub in JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningArtifactDetail" /></td>
    <td><code>object</code></td>
    <td>Information about the provisioning artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningArtifactParameters" /></td>
    <td><code>array</code></td>
    <td>Information about the parameters used to provision the product.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the current request. (AVAILABLE, CREATING, FAILED)</td>
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
    <td><a href="#list_provisioning_artifacts"><CopyableCode code="list_provisioning_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all provisioning artifacts (also known as versions) for the specified product.</td>
</tr>
<tr>
    <td><a href="#describe_provisioning_artifact"><CopyableCode code="describe_provisioning_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</td>
</tr>
<tr>
    <td><a href="#create_provisioning_artifact"><CopyableCode code="create_provisioning_artifact" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a provisioning artifact (also known as a version) for the specified product. You cannot create a provisioning artifact for a product that was shared with you. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.</td>
</tr>
<tr>
    <td><a href="#associate_service_action_with_provisioning_artifact"><CopyableCode code="associate_service_action_with_provisioning_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-ProvisioningArtifactId"><code>ProvisioningArtifactId</code></a>, <a href="#parameter-ServiceActionId"><code>ServiceActionId</code></a></td>
    <td></td>
    <td>Associates a self-service action with a provisioning artifact.</td>
</tr>
<tr>
    <td><a href="#update_provisioning_artifact"><CopyableCode code="update_provisioning_artifact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-ProvisioningArtifactId"><code>ProvisioningArtifactId</code></a></td>
    <td></td>
    <td>Updates the specified provisioning artifact (also known as a version) for the specified product. You cannot update a provisioning artifact for a product that was shared with you.</td>
</tr>
<tr>
    <td><a href="#delete_provisioning_artifact"><CopyableCode code="delete_provisioning_artifact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified provisioning artifact (also known as a version) for the specified product. You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.</td>
</tr>
<tr>
    <td><a href="#disassociate_service_action_from_provisioning_artifact"><CopyableCode code="disassociate_service_action_from_provisioning_artifact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-ProvisioningArtifactId"><code>ProvisioningArtifactId</code></a>, <a href="#parameter-ServiceActionId"><code>ServiceActionId</code></a></td>
    <td></td>
    <td>Disassociates the specified self-service action association from the specified provisioning artifact.</td>
</tr>
<tr>
    <td><a href="#import_as_provisioned_product"><CopyableCode code="import_as_provisioned_product" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-ProvisioningArtifactId"><code>ProvisioningArtifactId</code></a>, <a href="#parameter-ProvisionedProductName"><code>ProvisionedProductName</code></a>, <a href="#parameter-PhysicalId"><code>PhysicalId</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks, are not supported. The CloudFormation stack must have one of the following statuses to be imported: CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_ROLLBACK_COMPLETE, IMPORT_COMPLETE, and IMPORT_ROLLBACK_COMPLETE. Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. When you import an existing CloudFormation stack into a portfolio, Service Catalog does not apply the product's associated constraints during the import process. Service Catalog applies the constraints after you call UpdateProvisionedProduct for the provisioned product. The user or role that performs this operation must have the cloudformation:GetTemplate and cloudformation:DescribeStacks IAM policy permissions. You can only import one provisioned product at a time. The product's CloudFormation stack must have the IMPORT_COMPLETE status before you import another.</td>
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
    defaultValue="list_provisioning_artifacts"
    values={[
        { label: 'list_provisioning_artifacts', value: 'list_provisioning_artifacts' },
        { label: 'describe_provisioning_artifact', value: 'describe_provisioning_artifact' }
    ]}
>
<TabItem value="list_provisioning_artifacts">

Lists all provisioning artifacts (also known as versions) for the specified product.

```sql
SELECT
NextPageToken,
ProvisioningArtifactDetails
FROM aws.servicecatalog.provisioning_artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_provisioning_artifact">

Gets information about the specified provisioning artifact (also known as a version) for the specified product.

```sql
SELECT
Info,
ProvisioningArtifactDetail,
ProvisioningArtifactParameters,
Status
FROM aws.servicecatalog.provisioning_artifacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_provisioning_artifact"
    values={[
        { label: 'create_provisioning_artifact', value: 'create_provisioning_artifact' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_provisioning_artifact">

Creates a provisioning artifact (also known as a version) for the specified product. You cannot create a provisioning artifact for a product that was shared with you. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.

```sql
INSERT INTO aws.servicecatalog.provisioning_artifacts (
AcceptLanguage,
ProductId,
Parameters,
IdempotencyToken,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ ProductId }}' /* required */,
'{{ Parameters }}' /* required */,
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
Info,
ProvisioningArtifactDetail,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: provisioning_artifacts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the provisioning_artifacts resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: ProductId
      value: "{{ ProductId }}"
      description: |
        The product identifier.
    - name: Parameters
      description: |
        The configuration for the provisioning artifact.
      value:
        Name: "{{ Name }}"
        Description: "{{ Description }}"
        Info: "{{ Info }}"
        Type: "{{ Type }}"
        DisableTemplateValidation: {{ DisableTemplateValidation }}
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_service_action_with_provisioning_artifact"
    values={[
        { label: 'associate_service_action_with_provisioning_artifact', value: 'associate_service_action_with_provisioning_artifact' },
        { label: 'update_provisioning_artifact', value: 'update_provisioning_artifact' }
    ]}
>
<TabItem value="associate_service_action_with_provisioning_artifact">

Associates a self-service action with a provisioning artifact.

```sql
UPDATE aws.servicecatalog.provisioning_artifacts
SET 
ProductId = '{{ ProductId }}',
ProvisioningArtifactId = '{{ ProvisioningArtifactId }}',
ServiceActionId = '{{ ServiceActionId }}',
AcceptLanguage = '{{ AcceptLanguage }}',
IdempotencyToken = '{{ IdempotencyToken }}'
WHERE 
region = '{{ region }}' --required
AND ProductId = '{{ ProductId }}' --required
AND ProvisioningArtifactId = '{{ ProvisioningArtifactId }}' --required
AND ServiceActionId = '{{ ServiceActionId }}' --required;
```
</TabItem>
<TabItem value="update_provisioning_artifact">

Updates the specified provisioning artifact (also known as a version) for the specified product. You cannot update a provisioning artifact for a product that was shared with you.

```sql
UPDATE aws.servicecatalog.provisioning_artifacts
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
ProductId = '{{ ProductId }}',
ProvisioningArtifactId = '{{ ProvisioningArtifactId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
Active = {{ Active }},
Guidance = '{{ Guidance }}'
WHERE 
region = '{{ region }}' --required
AND ProductId = '{{ ProductId }}' --required
AND ProvisioningArtifactId = '{{ ProvisioningArtifactId }}' --required
RETURNING
Info,
ProvisioningArtifactDetail,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioning_artifact"
    values={[
        { label: 'delete_provisioning_artifact', value: 'delete_provisioning_artifact' }
    ]}
>
<TabItem value="delete_provisioning_artifact">

Deletes the specified provisioning artifact (also known as a version) for the specified product. You cannot delete a provisioning artifact associated with a product that was shared with you. You cannot delete the last provisioning artifact for a product, because a product must have at least one provisioning artifact.

```sql
DELETE FROM aws.servicecatalog.provisioning_artifacts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_service_action_from_provisioning_artifact"
    values={[
        { label: 'disassociate_service_action_from_provisioning_artifact', value: 'disassociate_service_action_from_provisioning_artifact' },
        { label: 'import_as_provisioned_product', value: 'import_as_provisioned_product' }
    ]}
>
<TabItem value="disassociate_service_action_from_provisioning_artifact">

Disassociates the specified self-service action association from the specified provisioning artifact.

```sql
EXEC aws.servicecatalog.provisioning_artifacts.disassociate_service_action_from_provisioning_artifact 
@region='{{ region }}' --required 
@@json=
'{
"ProductId": "{{ ProductId }}", 
"ProvisioningArtifactId": "{{ ProvisioningArtifactId }}", 
"ServiceActionId": "{{ ServiceActionId }}", 
"AcceptLanguage": "{{ AcceptLanguage }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
<TabItem value="import_as_provisioned_product">

Requests the import of a resource as an Service Catalog provisioned product that is associated to an Service Catalog product and provisioning artifact. Once imported, all supported governance actions are supported on the provisioned product. Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets, and non-root nested stacks, are not supported. The CloudFormation stack must have one of the following statuses to be imported: CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_ROLLBACK_COMPLETE, IMPORT_COMPLETE, and IMPORT_ROLLBACK_COMPLETE. Import of the resource requires that the CloudFormation stack template matches the associated Service Catalog product provisioning artifact. When you import an existing CloudFormation stack into a portfolio, Service Catalog does not apply the product's associated constraints during the import process. Service Catalog applies the constraints after you call UpdateProvisionedProduct for the provisioned product. The user or role that performs this operation must have the cloudformation:GetTemplate and cloudformation:DescribeStacks IAM policy permissions. You can only import one provisioned product at a time. The product's CloudFormation stack must have the IMPORT_COMPLETE status before you import another.

```sql
EXEC aws.servicecatalog.provisioning_artifacts.import_as_provisioned_product 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"ProductId": "{{ ProductId }}", 
"ProvisioningArtifactId": "{{ ProvisioningArtifactId }}", 
"ProvisionedProductName": "{{ ProvisionedProductName }}", 
"PhysicalId": "{{ PhysicalId }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
</Tabs>
