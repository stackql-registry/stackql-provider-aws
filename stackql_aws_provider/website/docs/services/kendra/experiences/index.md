--- 
title: experiences
hide_title: false
hide_table_of_contents: false
keywords:
  - experiences
  - kendra
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

Creates, updates, deletes, gets or lists an <code>experiences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="experiences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.experiences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_experience"
    values={[
        { label: 'describe_experience', value: 'describe_experience' }
    ]}
>
<TabItem value="describe_experience">

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
    <td><CopyableCode code="Configuration" /></td>
    <td><code>object</code></td>
    <td>Shows the configuration information for your Amazon Kendra experience. This includes ContentSourceConfiguration, which specifies the data source IDs and/or FAQ IDs, and UserIdentityConfiguration, which specifies the user or group information to grant access to your Amazon Kendra experience.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when your Amazon Kendra experience was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Shows the description for your Amazon Kendra experience. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>array</code></td>
    <td>Shows the endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>The reason your Amazon Kendra experience could not properly process. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Shows the identifier of your Amazon Kendra experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexId" /></td>
    <td><code>string</code></td>
    <td>Shows the identifier of the index for your Amazon Kendra experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Shows the name of your Amazon Kendra experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role with permission to access the Query API, QuerySuggestions API, SubmitFeedback API, and IAM Identity Center that stores your users and groups information. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current processing status of your Amazon Kendra experience. When the status is ACTIVE, your Amazon Kendra experience is ready to use. When the status is FAILED, the ErrorMessage field contains the reason that this failed. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when your Amazon Kendra experience was last updated.</td>
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
    <td><a href="#describe_experience"><CopyableCode code="describe_experience" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#create_experience"><CopyableCode code="create_experience" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#associate_entities_to_experience"><CopyableCode code="associate_entities_to_experience" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-EntityList"><code>EntityList</code></a></td>
    <td></td>
    <td>Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#update_experience"><CopyableCode code="update_experience" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#delete_experience"><CopyableCode code="delete_experience" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#disassociate_entities_from_experience"><CopyableCode code="disassociate_entities_from_experience" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-EntityList"><code>EntityList</code></a></td>
    <td></td>
    <td>Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
</tr>
<tr>
    <td><a href="#list_experiences"><CopyableCode code="list_experiences" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.</td>
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
    defaultValue="describe_experience"
    values={[
        { label: 'describe_experience', value: 'describe_experience' }
    ]}
>
<TabItem value="describe_experience">

Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
SELECT
Configuration,
CreatedAt,
Description,
Endpoints,
ErrorMessage,
Id,
IndexId,
Name,
RoleArn,
Status,
UpdatedAt
FROM aws.kendra.experiences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_experience"
    values={[
        { label: 'create_experience', value: 'create_experience' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_experience">

Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see Building a search experience with no code.

```sql
INSERT INTO aws.kendra.experiences (
Name,
IndexId,
RoleArn,
Configuration,
Description,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ IndexId }}' /* required */,
'{{ RoleArn }}',
'{{ Configuration }}',
'{{ Description }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
Id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: experiences
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the experiences resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for your Amazon Kendra experience.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index for your Amazon Kendra experience.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role with permission to access Query API, GetQuerySuggestions API, and other required APIs. The role also must include permission to access IAM Identity Center that stores your user and group information. For more information, see IAM access roles for Amazon Kendra.
    - name: Configuration
      description: |
        Configuration information for your Amazon Kendra experience. This includes ContentSourceConfiguration, which specifies the data source IDs and/or FAQ IDs, and UserIdentityConfiguration, which specifies the user or group information to grant access to your Amazon Kendra experience.
      value:
        ContentSourceConfiguration:
          DataSourceIds:
            - "{{ DataSourceIds }}"
          FaqIds:
            - "{{ FaqIds }}"
          DirectPutContent: {{ DirectPutContent }}
        UserIdentityConfiguration:
          IdentityAttributeName: "{{ IdentityAttributeName }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for your Amazon Kendra experience.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create your Amazon Kendra experience. Multiple calls to the CreateExperience API with the same client token creates only one Amazon Kendra experience.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_entities_to_experience"
    values={[
        { label: 'associate_entities_to_experience', value: 'associate_entities_to_experience' },
        { label: 'update_experience', value: 'update_experience' }
    ]}
>
<TabItem value="associate_entities_to_experience">

Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
UPDATE aws.kendra.experiences
SET 
Id = '{{ Id }}',
IndexId = '{{ IndexId }}',
EntityList = '{{ EntityList }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required
AND EntityList = '{{ EntityList }}' --required
RETURNING
FailedEntityList;
```
</TabItem>
<TabItem value="update_experience">

Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
UPDATE aws.kendra.experiences
SET 
Id = '{{ Id }}',
Name = '{{ Name }}',
IndexId = '{{ IndexId }}',
RoleArn = '{{ RoleArn }}',
Configuration = '{{ Configuration }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_experience"
    values={[
        { label: 'delete_experience', value: 'delete_experience' }
    ]}
>
<TabItem value="delete_experience">

Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
DELETE FROM aws.kendra.experiences
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_entities_from_experience"
    values={[
        { label: 'disassociate_entities_from_experience', value: 'disassociate_entities_from_experience' },
        { label: 'list_experiences', value: 'list_experiences' }
    ]}
>
<TabItem value="disassociate_entities_from_experience">

Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
EXEC aws.kendra.experiences.disassociate_entities_from_experience 
@region='{{ region }}' --required 
@@json=
'{
"Id": "{{ Id }}", 
"IndexId": "{{ IndexId }}", 
"EntityList": "{{ EntityList }}"
}'
;
```
</TabItem>
<TabItem value="list_experiences">

Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.

```sql
EXEC aws.kendra.experiences.list_experiences 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
