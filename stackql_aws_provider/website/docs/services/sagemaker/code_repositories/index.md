--- 
title: code_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - code_repositories
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

Creates, updates, deletes, gets or lists a <code>code_repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.code_repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_code_repository"
    values={[
        { label: 'describe_code_repository', value: 'describe_code_repository' },
        { label: 'list_code_repositories', value: 'list_code_repositories' }
    ]}
>
<TabItem value="describe_code_repository">

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
    <td><CopyableCode code="code_repository_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Git repository. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:code-repository/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Git repository. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="git_config" /></td>
    <td><code>object</code></td>
    <td>Configuration details about the repository, including the URL where the repository is located, the default branch, and the Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the repository was last changed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_repositories">

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
    <td><CopyableCode code="code_repository_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Git repository. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;&#123;9,16&#125;:&#91;0-9&#93;&#123;12&#125;:code-repository/&#91;\S&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Git repository. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Git repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="git_config" /></td>
    <td><code>object</code></td>
    <td>Configuration details for the Git repository, including the URL where it is located and the ARN of the Amazon Web Services Secrets Manager secret that contains the credentials used to access the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Git repository was last modified.</td>
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
    <td><a href="#describe_code_repository"><CopyableCode code="describe_code_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about the specified Git repository.</td>
</tr>
<tr>
    <td><a href="#list_code_repositories"><CopyableCode code="list_code_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the Git repositories in your account.</td>
</tr>
<tr>
    <td><a href="#create_code_repository"><CopyableCode code="create_code_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CodeRepositoryName"><code>CodeRepositoryName</code></a>, <a href="#parameter-GitConfig"><code>GitConfig</code></a></td>
    <td></td>
    <td>Creates a Git repository as a resource in your SageMaker AI account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker AI account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in Amazon Web Services CodeCommit or in any other Git repository.</td>
</tr>
<tr>
    <td><a href="#update_code_repository"><CopyableCode code="update_code_repository" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CodeRepositoryName"><code>CodeRepositoryName</code></a></td>
    <td></td>
    <td>Updates the specified Git repository with the specified values.</td>
</tr>
<tr>
    <td><a href="#delete_code_repository"><CopyableCode code="delete_code_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Git repository from your account.</td>
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
    defaultValue="describe_code_repository"
    values={[
        { label: 'describe_code_repository', value: 'describe_code_repository' },
        { label: 'list_code_repositories', value: 'list_code_repositories' }
    ]}
>
<TabItem value="describe_code_repository">

Gets details about the specified Git repository.

```sql
SELECT
code_repository_arn,
code_repository_name,
creation_time,
git_config,
last_modified_time
FROM aws.sagemaker.code_repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_repositories">

Gets a list of the Git repositories in your account.

```sql
SELECT
code_repository_arn,
code_repository_name,
creation_time,
git_config,
last_modified_time
FROM aws.sagemaker.code_repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_repository"
    values={[
        { label: 'create_code_repository', value: 'create_code_repository' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_repository">

Creates a Git repository as a resource in your SageMaker AI account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your SageMaker AI account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with. The repository can be hosted either in Amazon Web Services CodeCommit or in any other Git repository.

```sql
INSERT INTO aws.sagemaker.code_repositories (
CodeRepositoryName,
GitConfig,
Tags,
region
)
SELECT 
'{{ CodeRepositoryName }}' /* required */,
'{{ GitConfig }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
code_repository_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_repositories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_repositories resource.
    - name: CodeRepositoryName
      value: "{{ CodeRepositoryName }}"
      description: |
        The name of the Git repository. The name must have 1 to 63 characters. Valid characters are a-z, A-Z, 0-9, and - (hyphen).
    - name: GitConfig
      description: |
        Specifies details about the repository, including the URL where the repository is located, the default branch, and credentials to use to access the repository.
      value:
        RepositoryUrl: "{{ RepositoryUrl }}"
        Branch: "{{ Branch }}"
        SecretArn: "{{ SecretArn }}"
    - name: Tags
      description: |
        An array of key-value pairs. You can use tags to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. For more information, see Tagging Amazon Web Services Resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_code_repository"
    values={[
        { label: 'update_code_repository', value: 'update_code_repository' }
    ]}
>
<TabItem value="update_code_repository">

Updates the specified Git repository with the specified values.

```sql
UPDATE aws.sagemaker.code_repositories
SET 
CodeRepositoryName = '{{ CodeRepositoryName }}',
GitConfig = '{{ GitConfig }}'
WHERE 
region = '{{ region }}' --required
AND CodeRepositoryName = '{{ CodeRepositoryName }}' --required
RETURNING
code_repository_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_code_repository"
    values={[
        { label: 'delete_code_repository', value: 'delete_code_repository' }
    ]}
>
<TabItem value="delete_code_repository">

Deletes the specified Git repository from your account.

```sql
DELETE FROM aws.sagemaker.code_repositories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
