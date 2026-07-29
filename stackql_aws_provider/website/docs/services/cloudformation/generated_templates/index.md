--- 
title: generated_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - generated_templates
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>generated_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="generated_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.generated_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_generated_template"
    values={[
        { label: 'describe_generated_template', value: 'describe_generated_template' },
        { label: 'list_generated_templates', value: 'list_generated_templates' }
    ]}
>
<TabItem value="describe_generated_template">

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
    <td><CopyableCode code="logical_resource_id" /></td>
    <td><code>string</code></td>
    <td>The logical id for this resource in the final generated template.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>A list of up to 256 key-value pairs that identifies the resource in the generated template. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the primaryIdentifier list in the resource schema.) The value is the value of that primary identifier. For example, for a AWS::DynamoDB::Table resource, the primary identifiers is TableName so the key-value pair could be "TableName": "MyDDBTable". For more information, see primaryIdentifier in the CloudFormation Command Line Interface (CLI) User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Status of the processing of a resource in a generated template. InProgress The resource processing is still in progress. Complete The resource processing is complete. Pending The resource processing is pending. Failed The resource processing has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the resource detail, providing more information if a failure happened.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource, such as AWS::DynamoDB::Table. For the list of supported resources, see Resource type support for imports and drift detection In the CloudFormation User Guide</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>string</code></td>
    <td>The warnings generated for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_generated_templates">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The time the generated template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="generated_template_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the generated template. The format is arn:$&#123;Partition&#125;:cloudformation:$&#123;Region&#125;:$&#123;Account&#125;:generatedtemplate/$&#123;Id&#125;. For example, arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc .</td>
</tr>
<tr>
    <td><CopyableCode code="generated_template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the generated template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string</code></td>
    <td>The time the generated template was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_resources" /></td>
    <td><code>integer</code></td>
    <td>The number of resources in the generated template. This is a total of resources in pending, in-progress, completed, and failed states.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the template generation. Supported values are: CreatePending - the creation of the template is pending. CreateInProgress - the creation of the template is in progress. DeletePending - the deletion of the template is pending. DeleteInProgress - the deletion of the template is in progress. UpdatePending - the update of the template is pending. UpdateInProgress - the update of the template is in progress. Failed - the template operation failed. Complete - the template operation is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current template generation status. This will provide more details if a failure happened.</td>
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
    <td><a href="#describe_generated_template"><CopyableCode code="describe_generated_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-GeneratedTemplateName"><code>GeneratedTemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a generated template. The output includes details about the progress of the creation of a generated template started by a CreateGeneratedTemplate API action or the update of a generated template started with an UpdateGeneratedTemplate API action.</td>
</tr>
<tr>
    <td><a href="#list_generated_templates"><CopyableCode code="list_generated_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists your generated templates in this Region.</td>
</tr>
<tr>
    <td><a href="#create_generated_template"><CopyableCode code="create_generated_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GeneratedTemplateName"><code>GeneratedTemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Resources"><code>Resources</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-TemplateConfiguration"><code>TemplateConfiguration</code></a></td>
    <td>Creates a template from existing resources that are not already managed with CloudFormation. You can check the status of the template generation using the DescribeGeneratedTemplate API action.</td>
</tr>
<tr>
    <td><a href="#update_generated_template"><CopyableCode code="update_generated_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GeneratedTemplateName"><code>GeneratedTemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewGeneratedTemplateName"><code>NewGeneratedTemplateName</code></a>, <a href="#parameter-AddResources"><code>AddResources</code></a>, <a href="#parameter-RemoveResources"><code>RemoveResources</code></a>, <a href="#parameter-RefreshAllResources"><code>RefreshAllResources</code></a>, <a href="#parameter-TemplateConfiguration"><code>TemplateConfiguration</code></a></td>
    <td>Updates a generated template. This can be used to change the name, add and remove resources, refresh resources, and change the DeletionPolicy and UpdateReplacePolicy settings. You can check the status of the update to the generated template using the DescribeGeneratedTemplate API action.</td>
</tr>
<tr>
    <td><a href="#delete_generated_template"><CopyableCode code="delete_generated_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GeneratedTemplateName"><code>GeneratedTemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deleted a generated template.</td>
</tr>
<tr>
    <td><a href="#get_generated_template"><CopyableCode code="get_generated_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GeneratedTemplateName"><code>GeneratedTemplateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Format"><code>Format</code></a></td>
    <td>Retrieves a generated template. If the template is in an InProgress or Pending status then the template returned will be the template when the template was last in a Complete status. If the template has not yet been in a Complete status then an empty template will be returned.</td>
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
<tr id="parameter-GeneratedTemplateName">
    <td><CopyableCode code="GeneratedTemplateName" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) of the generated template. The format is arn:$&#123;Partition&#125;:cloudformation:$&#123;Region&#125;:$&#123;Account&#125;:generatedtemplate/$&#123;Id&#125;. For example, arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc .</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddResources">
    <td><CopyableCode code="AddResources" /></td>
    <td><code>array</code></td>
    <td>An optional list of resources to be added to the generated template.</td>
</tr>
<tr id="parameter-Format">
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The language to use to retrieve for the generated template. Supported values are: JSON YAML</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. By default the ListGeneratedTemplates API action will return at most 50 results in each response. The maximum value is 100.</td>
</tr>
<tr id="parameter-NewGeneratedTemplateName">
    <td><CopyableCode code="NewGeneratedTemplateName" /></td>
    <td><code>string</code></td>
    <td>An optional new name to assign to the generated template.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-RefreshAllResources">
    <td><CopyableCode code="RefreshAllResources" /></td>
    <td><code>boolean</code></td>
    <td>If true, update the resource properties in the generated template with their current live state. This feature is useful when the resource properties in your generated a template does not reflect the live state of the resource properties. This happens when a user update the resource properties after generating a template.</td>
</tr>
<tr id="parameter-RemoveResources">
    <td><CopyableCode code="RemoveResources" /></td>
    <td><code>array</code></td>
    <td>A list of logical ids for resources to remove from the generated template.</td>
</tr>
<tr id="parameter-Resources">
    <td><CopyableCode code="Resources" /></td>
    <td><code>array</code></td>
    <td>An optional list of resources to be included in the generated template. If no resources are specified,the template will be created without any resources. Resources can be added to the template using the UpdateGeneratedTemplate API action.</td>
</tr>
<tr id="parameter-StackName">
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>An optional name or ARN of a stack to use as the base stack for the generated template.</td>
</tr>
<tr id="parameter-TemplateConfiguration">
    <td><CopyableCode code="TemplateConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration details of the generated template, including the DeletionPolicy and UpdateReplacePolicy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_generated_template"
    values={[
        { label: 'describe_generated_template', value: 'describe_generated_template' },
        { label: 'list_generated_templates', value: 'list_generated_templates' }
    ]}
>
<TabItem value="describe_generated_template">

Describes a generated template. The output includes details about the progress of the creation of a generated template started by a CreateGeneratedTemplate API action or the update of a generated template started with an UpdateGeneratedTemplate API action.

```sql
SELECT
logical_resource_id,
resource_identifier,
resource_status,
resource_status_reason,
resource_type,
warnings
FROM aws.cloudformation.generated_templates
WHERE GeneratedTemplateName = '{{ GeneratedTemplateName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_generated_templates">

Lists your generated templates in this Region.

```sql
SELECT
creation_time,
generated_template_id,
generated_template_name,
last_updated_time,
number_of_resources,
status,
status_reason
FROM aws.cloudformation.generated_templates
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_generated_template"
    values={[
        { label: 'create_generated_template', value: 'create_generated_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_generated_template">

Creates a template from existing resources that are not already managed with CloudFormation. You can check the status of the template generation using the DescribeGeneratedTemplate API action.

```sql
INSERT INTO aws.cloudformation.generated_templates (
GeneratedTemplateName,
region,
Resources,
StackName,
TemplateConfiguration
)
SELECT 
'{{ GeneratedTemplateName }}',
'{{ region }}',
'{{ Resources }}',
'{{ StackName }}',
'{{ TemplateConfiguration }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: generated_templates
  props:
    - name: GeneratedTemplateName
      value: "{{ GeneratedTemplateName }}"
      description: Required parameter for the generated_templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the generated_templates resource.
    - name: Resources
      value: "{{ Resources }}"
      description: An optional list of resources to be included in the generated template. If no resources are specified,the template will be created without any resources. Resources can be added to the template using the UpdateGeneratedTemplate API action.
      description: An optional list of resources to be included in the generated template. If no resources are specified,the template will be created without any resources. Resources can be added to the template using the UpdateGeneratedTemplate API action.
    - name: StackName
      value: "{{ StackName }}"
      description: An optional name or ARN of a stack to use as the base stack for the generated template.
      description: An optional name or ARN of a stack to use as the base stack for the generated template.
    - name: TemplateConfiguration
      value: "{{ TemplateConfiguration }}"
      description: The configuration details of the generated template, including the DeletionPolicy and UpdateReplacePolicy.
      description: The configuration details of the generated template, including the DeletionPolicy and UpdateReplacePolicy.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_generated_template"
    values={[
        { label: 'update_generated_template', value: 'update_generated_template' }
    ]}
>
<TabItem value="update_generated_template">

Updates a generated template. This can be used to change the name, add and remove resources, refresh resources, and change the DeletionPolicy and UpdateReplacePolicy settings. You can check the status of the update to the generated template using the DescribeGeneratedTemplate API action.

```sql
UPDATE aws.cloudformation.generated_templates
SET 
-- No updatable properties
WHERE 
GeneratedTemplateName = '{{ GeneratedTemplateName }}' --required
AND region = '{{ region }}' --required
AND NewGeneratedTemplateName = '{{ NewGeneratedTemplateName}}'
AND AddResources = '{{ AddResources}}'
AND RemoveResources = '{{ RemoveResources}}'
AND RefreshAllResources = {{ RefreshAllResources}}
AND TemplateConfiguration = '{{ TemplateConfiguration}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_generated_template"
    values={[
        { label: 'delete_generated_template', value: 'delete_generated_template' }
    ]}
>
<TabItem value="delete_generated_template">

Deleted a generated template.

```sql
DELETE FROM aws.cloudformation.generated_templates
WHERE GeneratedTemplateName = '{{ GeneratedTemplateName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_generated_template"
    values={[
        { label: 'get_generated_template', value: 'get_generated_template' }
    ]}
>
<TabItem value="get_generated_template">

Retrieves a generated template. If the template is in an InProgress or Pending status then the template returned will be the template when the template was last in a Complete status. If the template has not yet been in a Complete status then an empty template will be returned.

```sql
EXEC aws.cloudformation.generated_templates.get_generated_template 
@GeneratedTemplateName='{{ GeneratedTemplateName }}' --required, 
@region='{{ region }}' --required, 
@Format='{{ Format }}'
;
```
</TabItem>
</Tabs>
