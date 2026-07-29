--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_project"
    values={[
        { label: 'describe_project', value: 'describe_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="describe_project">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when project was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="project_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the project. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:project/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_description" /></td>
    <td><code>string</code></td>
    <td>The description of the project. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;Z&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,31&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_status" /></td>
    <td><code>string</code></td>
    <td>The status of the project. (Pending, CreateInProgress, CreateCompleted, CreateFailed, DeleteInProgress, DeleteFailed, DeleteCompleted, UpdateInProgress, UpdateCompleted, UpdateFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="service_catalog_provisioned_product_details" /></td>
    <td><code>object</code></td>
    <td>Information about a provisioned service catalog product.</td>
</tr>
<tr>
    <td><CopyableCode code="service_catalog_provisioning_details" /></td>
    <td><code>object</code></td>
    <td>Information used to provision a service catalog product. For information, see What is Amazon Web Services Service Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="template_provider_details" /></td>
    <td><code>array</code></td>
    <td>An array of template providers associated with the project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_projects">

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
    <td>If the result of the previous ListCompilationJobs request was truncated, the response includes a NextToken. To retrieve the next set of model compilation jobs, use the token in the next request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="project_summary_list" /></td>
    <td><code>array</code></td>
    <td>A list of summaries of projects.</td>
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
    <td><a href="#describe_project"><CopyableCode code="describe_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the details of a project.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the projects in an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectName"><code>ProjectName</code></a></td>
    <td></td>
    <td>Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectName"><code>ProjectName</code></a></td>
    <td></td>
    <td>Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model. You must not update a project that is in use. If you update the ServiceCatalogProvisioningUpdateDetails of a project that is active or being created, or updated, you may lose resources already created by the project.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the specified project.</td>
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
    defaultValue="describe_project"
    values={[
        { label: 'describe_project', value: 'describe_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="describe_project">

Describes the details of a project.

```sql
SELECT
created_by,
creation_time,
last_modified_by,
last_modified_time,
project_arn,
project_description,
project_id,
project_name,
project_status,
service_catalog_provisioned_product_details,
service_catalog_provisioning_details,
template_provider_details
FROM aws.sagemaker.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Gets a list of the projects in an Amazon Web Services account.

```sql
SELECT
next_token,
project_summary_list
FROM aws.sagemaker.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project"
    values={[
        { label: 'create_project', value: 'create_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project">

Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.

```sql
INSERT INTO aws.sagemaker.projects (
ProjectName,
ProjectDescription,
ServiceCatalogProvisioningDetails,
Tags,
TemplateProviders,
region
)
SELECT 
'{{ ProjectName }}' /* required */,
'{{ ProjectDescription }}',
'{{ ServiceCatalogProvisioningDetails }}',
'{{ Tags }}',
'{{ TemplateProviders }}',
'{{ region }}'
RETURNING
project_arn,
project_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the projects resource.
    - name: ProjectName
      value: "{{ ProjectName }}"
      description: |
        The name of the project.
    - name: ProjectDescription
      value: "{{ ProjectDescription }}"
      description: |
        A description for the project.
    - name: ServiceCatalogProvisioningDetails
      description: |
        The product ID and provisioning artifact ID to provision a service catalog. The provisioning artifact ID will default to the latest provisioning artifact ID of the product, if you don't provide the provisioning artifact ID. For more information, see What is Amazon Web Services Service Catalog.
      value:
        ProductId: "{{ ProductId }}"
        ProvisioningArtifactId: "{{ ProvisioningArtifactId }}"
        PathId: "{{ PathId }}"
        ProvisioningParameters:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: Tags
      description: |
        An array of key-value pairs that you want to use to organize and track your Amazon Web Services resource costs. For more information, see Tagging Amazon Web Services resources in the Amazon Web Services General Reference Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TemplateProviders
      description: |
        An array of template provider configurations for creating infrastructure resources for the project.
      value:
        - CfnTemplateProvider:
            TemplateName: "{{ TemplateName }}"
            TemplateURL: "{{ TemplateURL }}"
            RoleARN: "{{ RoleARN }}"
            Parameters:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project"
    values={[
        { label: 'update_project', value: 'update_project' }
    ]}
>
<TabItem value="update_project">

Updates a machine learning (ML) project that is created from a template that sets up an ML pipeline from training to deploying an approved model. You must not update a project that is in use. If you update the ServiceCatalogProvisioningUpdateDetails of a project that is active or being created, or updated, you may lose resources already created by the project.

```sql
UPDATE aws.sagemaker.projects
SET 
ProjectName = '{{ ProjectName }}',
ProjectDescription = '{{ ProjectDescription }}',
ServiceCatalogProvisioningUpdateDetails = '{{ ServiceCatalogProvisioningUpdateDetails }}',
Tags = '{{ Tags }}',
TemplateProvidersToUpdate = '{{ TemplateProvidersToUpdate }}'
WHERE 
region = '{{ region }}' --required
AND ProjectName = '{{ ProjectName }}' --required
RETURNING
project_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project"
    values={[
        { label: 'delete_project', value: 'delete_project' }
    ]}
>
<TabItem value="delete_project">

Delete the specified project.

```sql
DELETE FROM aws.sagemaker.projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
