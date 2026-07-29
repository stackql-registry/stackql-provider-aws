--- 
title: products
hide_title: false
hide_table_of_contents: false
keywords:
  - products
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

Creates, updates, deletes, gets or lists a <code>products</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="products" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.products" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_product"
    values={[
        { label: 'describe_product', value: 'describe_product' }
    ]}
>
<TabItem value="describe_product">

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
    <td><CopyableCode code="budgets" /></td>
    <td><code>array</code></td>
    <td>Information about the associated budgets.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_paths" /></td>
    <td><code>array</code></td>
    <td>Information about the associated launch paths.</td>
</tr>
<tr>
    <td><CopyableCode code="product_view_summary" /></td>
    <td><code>object</code></td>
    <td>Summary information about the product view.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifacts" /></td>
    <td><code>array</code></td>
    <td>Information about the provisioning artifacts for the specified product.</td>
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
    <td><a href="#describe_product"><CopyableCode code="describe_product" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified product. Running this operation with administrator access results in a failure. DescribeProductAsAdmin should be used instead.</td>
</tr>
<tr>
    <td><a href="#create_product"><CopyableCode code="create_product" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Owner"><code>Owner</code></a>, <a href="#parameter-ProductType"><code>ProductType</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a product. A delegated admin is authorized to invoke this command. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.</td>
</tr>
<tr>
    <td><a href="#provision_product"><CopyableCode code="provision_product" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProvisionedProductName"><code>ProvisionedProductName</code></a>, <a href="#parameter-ProvisionToken"><code>ProvisionToken</code></a></td>
    <td></td>
    <td>Provisions the specified product. A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using DescribeRecord. If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags&#91;N&#93;:Value". When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see Granting users access in the Service Catalog User Guide.</td>
</tr>
<tr>
    <td><a href="#update_product"><CopyableCode code="update_product" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Id"><code>Id</code></a></td>
    <td></td>
    <td>Updates the specified product.</td>
</tr>
<tr>
    <td><a href="#delete_product"><CopyableCode code="delete_product" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified product. You cannot delete a product if it was shared with you or is associated with a portfolio. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#search_products"><CopyableCode code="search_products" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the products to which the caller has access.</td>
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
    defaultValue="describe_product"
    values={[
        { label: 'describe_product', value: 'describe_product' }
    ]}
>
<TabItem value="describe_product">

Gets information about the specified product. Running this operation with administrator access results in a failure. DescribeProductAsAdmin should be used instead.

```sql
SELECT
budgets,
launch_paths,
product_view_summary,
provisioning_artifacts
FROM aws.servicecatalog.products
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_product"
    values={[
        { label: 'create_product', value: 'create_product' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_product">

Creates a product. A delegated admin is authorized to invoke this command. The user or role that performs this operation must have the cloudformation:GetTemplate IAM policy permission. This policy permission is required when using the ImportFromPhysicalId template source in the information data section.

```sql
INSERT INTO aws.servicecatalog.products (
AcceptLanguage,
Name,
Owner,
Description,
Distributor,
SupportDescription,
SupportEmail,
SupportUrl,
ProductType,
Tags,
ProvisioningArtifactParameters,
IdempotencyToken,
SourceConnection,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ Name }}' /* required */,
'{{ Owner }}' /* required */,
'{{ Description }}',
'{{ Distributor }}',
'{{ SupportDescription }}',
'{{ SupportEmail }}',
'{{ SupportUrl }}',
'{{ ProductType }}' /* required */,
'{{ Tags }}',
'{{ ProvisioningArtifactParameters }}',
'{{ IdempotencyToken }}' /* required */,
'{{ SourceConnection }}',
'{{ region }}'
RETURNING
product_view_detail,
provisioning_artifact_detail,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: products
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the products resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the product.
    - name: Owner
      value: "{{ Owner }}"
      description: |
        The owner of the product.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the product.
    - name: Distributor
      value: "{{ Distributor }}"
      description: |
        The distributor of the product.
    - name: SupportDescription
      value: "{{ SupportDescription }}"
      description: |
        The support information about the product.
    - name: SupportEmail
      value: "{{ SupportEmail }}"
      description: |
        The contact email for product support.
    - name: SupportUrl
      value: "{{ SupportUrl }}"
      description: |
        The contact URL for product support. ^https?:\/\// / is the pattern used to validate SupportUrl.
    - name: ProductType
      value: "{{ ProductType }}"
      description: |
        The type of product.
      valid_values: ['CLOUD_FORMATION_TEMPLATE', 'MARKETPLACE', 'TERRAFORM_OPEN_SOURCE', 'TERRAFORM_CLOUD', 'EXTERNAL']
    - name: Tags
      description: |
        One or more tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ProvisioningArtifactParameters
      description: |
        The configuration of the provisioning artifact.
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
    - name: SourceConnection
      description: |
        Specifies connection details for the created product and syncs the product to the connection source artifact. This automatically manages the product's artifacts based on changes to the source. The SourceConnection parameter consists of the following sub-fields. Type ConnectionParamters
      value:
        Type: "{{ Type }}"
        ConnectionParameters:
          CodeStar:
            ConnectionArn: "{{ ConnectionArn }}"
            Repository: "{{ Repository }}"
            Branch: "{{ Branch }}"
            ArtifactPath: "{{ ArtifactPath }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="provision_product"
    values={[
        { label: 'provision_product', value: 'provision_product' },
        { label: 'update_product', value: 'update_product' }
    ]}
>
<TabItem value="provision_product">

Provisions the specified product. A provisioned product is a resourced instance of a product. For example, provisioning a product that's based on an CloudFormation template launches an CloudFormation stack and its underlying resources. You can check the status of this request using DescribeRecord. If the request contains a tag key with an empty list of values, there's a tag conflict for that key. Don't include conflicted keys as tags, or this will cause the error "Parameter validation failed: Missing required parameter in Tags[N]:Value". When provisioning a product that's been added to a portfolio, you must grant your user, group, or role access to the portfolio. For more information, see Granting users access in the Service Catalog User Guide.

```sql
UPDATE aws.servicecatalog.products
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
ProductId = '{{ ProductId }}',
ProductName = '{{ ProductName }}',
ProvisioningArtifactId = '{{ ProvisioningArtifactId }}',
ProvisioningArtifactName = '{{ ProvisioningArtifactName }}',
PathId = '{{ PathId }}',
PathName = '{{ PathName }}',
ProvisionedProductName = '{{ ProvisionedProductName }}',
ProvisioningParameters = '{{ ProvisioningParameters }}',
ProvisioningPreferences = '{{ ProvisioningPreferences }}',
Tags = '{{ Tags }}',
NotificationArns = '{{ NotificationArns }}',
ProvisionToken = '{{ ProvisionToken }}'
WHERE 
region = '{{ region }}' --required
AND ProvisionedProductName = '{{ ProvisionedProductName }}' --required
AND ProvisionToken = '{{ ProvisionToken }}' --required
RETURNING
record_detail;
```
</TabItem>
<TabItem value="update_product">

Updates the specified product.

```sql
UPDATE aws.servicecatalog.products
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
Id = '{{ Id }}',
Name = '{{ Name }}',
Owner = '{{ Owner }}',
Description = '{{ Description }}',
Distributor = '{{ Distributor }}',
SupportDescription = '{{ SupportDescription }}',
SupportEmail = '{{ SupportEmail }}',
SupportUrl = '{{ SupportUrl }}',
AddTags = '{{ AddTags }}',
RemoveTags = '{{ RemoveTags }}',
SourceConnection = '{{ SourceConnection }}'
WHERE 
region = '{{ region }}' --required
AND Id = '{{ Id }}' --required
RETURNING
product_view_detail,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_product"
    values={[
        { label: 'delete_product', value: 'delete_product' }
    ]}
>
<TabItem value="delete_product">

Deletes the specified product. You cannot delete a product if it was shared with you or is associated with a portfolio. A delegated admin is authorized to invoke this command.

```sql
DELETE FROM aws.servicecatalog.products
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_products"
    values={[
        { label: 'search_products', value: 'search_products' }
    ]}
>
<TabItem value="search_products">

Gets information about the products to which the caller has access.

```sql
EXEC aws.servicecatalog.products.search_products 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"Filters": "{{ Filters }}", 
"PageSize": {{ PageSize }}, 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}", 
"PageToken": "{{ PageToken }}"
}'
;
```
</TabItem>
</Tabs>
