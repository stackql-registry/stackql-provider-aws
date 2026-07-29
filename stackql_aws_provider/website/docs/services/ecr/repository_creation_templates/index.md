--- 
title: repository_creation_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_creation_templates
  - ecr
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

Creates, updates, deletes, gets or lists a <code>repository_creation_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_creation_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.repository_creation_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_repository_creation_templates"
    values={[
        { label: 'describe_repository_creation_templates', value: 'describe_repository_creation_templates' }
    ]}
>
<TabItem value="describe_repository_creation_templates">

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
    <td><CopyableCode code="applied_for" /></td>
    <td><code>array</code></td>
    <td>A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in JavaScript date format, when the repository creation template was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description associated with the repository creation template.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration associated with the repository creation template.</td>
</tr>
<tr>
    <td><CopyableCode code="image_tag_mutability" /></td>
    <td><code>string</code></td>
    <td>The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten. (MUTABLE, IMMUTABLE, IMMUTABLE_WITH_EXCLUSION, MUTABLE_WITH_EXCLUSION)</td>
</tr>
<tr>
    <td><CopyableCode code="image_tag_mutability_exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_policy" /></td>
    <td><code>string</code></td>
    <td>The lifecycle policy to use for repositories created using the template.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The repository namespace prefix associated with the repository creation template. (pattern: &lt;code&gt;^(&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*\/?|ROOT)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_policy" /></td>
    <td><code>string</code></td>
    <td>The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_tags" /></td>
    <td><code>array</code></td>
    <td>The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in JavaScript date format, when the repository creation template was last updated.</td>
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
    <td><a href="#describe_repository_creation_templates"><CopyableCode code="describe_repository_creation_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the repository creation templates in a registry. The prefixes request parameter can be used to return the details for a specific repository creation template.</td>
</tr>
<tr>
    <td><a href="#create_repository_creation_template"><CopyableCode code="create_repository_creation_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-appliedFor"><code>appliedFor</code></a></td>
    <td></td>
    <td>Creates a repository creation template. This template is used to define the settings for repositories created by Amazon ECR on your behalf. For example, repositories created through pull through cache actions. For more information, see Private repository creation templates in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#update_repository_creation_template"><CopyableCode code="update_repository_creation_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td></td>
    <td>Updates an existing repository creation template.</td>
</tr>
<tr>
    <td><a href="#delete_repository_creation_template"><CopyableCode code="delete_repository_creation_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a repository creation template.</td>
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
    defaultValue="describe_repository_creation_templates"
    values={[
        { label: 'describe_repository_creation_templates', value: 'describe_repository_creation_templates' }
    ]}
>
<TabItem value="describe_repository_creation_templates">

Returns details about the repository creation templates in a registry. The prefixes request parameter can be used to return the details for a specific repository creation template.

```sql
SELECT
applied_for,
created_at,
custom_role_arn,
description,
encryption_configuration,
image_tag_mutability,
image_tag_mutability_exclusion_filters,
lifecycle_policy,
prefix,
repository_policy,
resource_tags,
updated_at
FROM aws.ecr.repository_creation_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository_creation_template"
    values={[
        { label: 'create_repository_creation_template', value: 'create_repository_creation_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository_creation_template">

Creates a repository creation template. This template is used to define the settings for repositories created by Amazon ECR on your behalf. For example, repositories created through pull through cache actions. For more information, see Private repository creation templates in the Amazon Elastic Container Registry User Guide.

```sql
INSERT INTO aws.ecr.repository_creation_templates (
prefix,
description,
encryptionConfiguration,
resourceTags,
imageTagMutability,
imageTagMutabilityExclusionFilters,
repositoryPolicy,
lifecyclePolicy,
appliedFor,
customRoleArn,
region
)
SELECT 
'{{ prefix }}' /* required */,
'{{ description }}',
'{{ encryptionConfiguration }}',
'{{ resourceTags }}',
'{{ imageTagMutability }}',
'{{ imageTagMutabilityExclusionFilters }}',
'{{ repositoryPolicy }}',
'{{ lifecyclePolicy }}',
'{{ appliedFor }}' /* required */,
'{{ customRoleArn }}',
'{{ region }}'
RETURNING
registry_id,
repository_creation_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repository_creation_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repository_creation_templates resource.
    - name: prefix
      value: "{{ prefix }}"
      description: |
        The repository namespace prefix to associate with the template. All repositories created using this namespace prefix will have the settings defined in this template applied. For example, a prefix of prod would apply to all repositories beginning with prod/. Similarly, a prefix of prod/team would apply to all repositories beginning with prod/team/. To apply a template to all repositories in your registry that don't have an associated creation template, you can use ROOT as the prefix. There is always an assumed / applied to the end of the prefix. If you specify ecr-public as the prefix, Amazon ECR treats that as ecr-public/. When using a pull through cache rule, the repository prefix you specify during rule creation is what you should specify as your repository creation template prefix as well.
    - name: description
      value: "{{ description }}"
      description: |
        A description for the repository creation template.
    - name: encryptionConfiguration
      description: |
        The encryption configuration to use for repositories created using the template.
      value:
        encryptionType: "{{ encryptionType }}"
        kmsKey: "{{ kmsKey }}"
    - name: resourceTags
      description: |
        The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: imageTagMutability
      value: "{{ imageTagMutability }}"
      description: |
        The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
      valid_values: ['MUTABLE', 'IMMUTABLE', 'IMMUTABLE_WITH_EXCLUSION', 'MUTABLE_WITH_EXCLUSION']
    - name: imageTagMutabilityExclusionFilters
      description: |
        A list of filters that specify which image tags should be excluded from the repository creation template's image tag mutability setting.
      value:
        - filterType: "{{ filterType }}"
          filter: "{{ filter }}"
    - name: repositoryPolicy
      value: "{{ repositoryPolicy }}"
      description: |
        The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
    - name: lifecyclePolicy
      value: "{{ lifecyclePolicy }}"
      description: |
        The lifecycle policy to use for repositories created using the template.
    - name: appliedFor
      value:
        - "{{ appliedFor }}"
      description: |
        A list of enumerable strings representing the Amazon ECR repository creation scenarios that this template will apply towards. The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH
    - name: customRoleArn
      value: "{{ customRoleArn }}"
      description: |
        The ARN of the role to be assumed by Amazon ECR. This role must be in the same account as the registry that you are configuring. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_repository_creation_template"
    values={[
        { label: 'update_repository_creation_template', value: 'update_repository_creation_template' }
    ]}
>
<TabItem value="update_repository_creation_template">

Updates an existing repository creation template.

```sql
UPDATE aws.ecr.repository_creation_templates
SET 
prefix = '{{ prefix }}',
description = '{{ description }}',
encryptionConfiguration = '{{ encryptionConfiguration }}',
resourceTags = '{{ resourceTags }}',
imageTagMutability = '{{ imageTagMutability }}',
imageTagMutabilityExclusionFilters = '{{ imageTagMutabilityExclusionFilters }}',
repositoryPolicy = '{{ repositoryPolicy }}',
lifecyclePolicy = '{{ lifecyclePolicy }}',
appliedFor = '{{ appliedFor }}',
customRoleArn = '{{ customRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND prefix = '{{ prefix }}' --required
RETURNING
registry_id,
repository_creation_template;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository_creation_template"
    values={[
        { label: 'delete_repository_creation_template', value: 'delete_repository_creation_template' }
    ]}
>
<TabItem value="delete_repository_creation_template">

Deletes a repository creation template.

```sql
DELETE FROM aws.ecr.repository_creation_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
