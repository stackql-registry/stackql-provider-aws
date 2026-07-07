--- 
title: prompts
hide_title: false
hide_table_of_contents: false
keywords:
  - prompts
  - bedrock_agent
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

Creates, updates, deletes, gets or lists a <code>prompts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prompts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.prompts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_prompt"
    values={[
        { label: 'get_prompt', value: 'get_prompt' },
        { label: 'list_prompts', value: 'list_prompts' }
    ]}
>
<TabItem value="get_prompt">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the prompt. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the prompt. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request). (pattern: &lt;code&gt;(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:prompt/&#91;0-9a-zA-Z&#93;&#123;10&#125;(?::&#91;0-9&#93;&#123;1,5&#125;)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the prompt was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customerEncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="defaultVariant" /></td>
    <td><code>string</code></td>
    <td>The name of the default variant for the prompt. This value must match the name field in the relevant PromptVariant object. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The descriptino of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the prompt was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td>A list of objects, each containing details about a variant of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the prompt. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_prompts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the prompt. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the prompt. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request). (pattern: &lt;code&gt;(arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:prompt/&#91;0-9a-zA-Z&#93;&#123;10&#125;(?::&#91;0-9&#93;&#123;1,5&#125;)?)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the prompt was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the prompt was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the prompt that this summary applies to. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_prompt"><CopyableCode code="get_prompt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-prompt_identifier"><code>prompt_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-promptVersion"><code>promptVersion</code></a></td>
    <td>Retrieves information about the working draft (DRAFT version) of a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see View information about prompts using Prompt management and View information about a version of your prompt in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_prompts"><CopyableCode code="list_prompts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-promptIdentifier"><code>promptIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns either information about the working draft (DRAFT version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the promptIdentifier field or not. For more information, see View information about prompts using Prompt management in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_prompt"><CopyableCode code="create_prompt" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a prompt in your prompt library that you can add to a flow. For more information, see Prompt management in Amazon Bedrock, Create a prompt using Prompt management and Prompt flows in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_prompt_version"><CopyableCode code="create_prompt_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-prompt_identifier"><code>prompt_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a static snapshot of your prompt that can be deployed to production. For more information, see Deploy prompts using Prompt management by creating versions in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#update_prompt"><CopyableCode code="update_prompt" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-prompt_identifier"><code>prompt_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Modifies a prompt in your prompt library. Include both fields that you want to keep and fields that you want to replace. For more information, see Prompt management in Amazon Bedrock and Edit prompts in your prompt library in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_prompt"><CopyableCode code="delete_prompt" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-prompt_identifier"><code>prompt_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-promptVersion"><code>promptVersion</code></a></td>
    <td>Deletes a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see Delete prompts from the Prompt management tool and Delete a version of a prompt from the Prompt management tool in the Amazon Bedrock User Guide.</td>
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
<tr id="parameter-prompt_identifier">
    <td><CopyableCode code="prompt_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the prompt.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-promptIdentifier">
    <td><CopyableCode code="promptIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.</td>
</tr>
<tr id="parameter-promptVersion">
    <td><CopyableCode code="promptVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the prompt to delete. To delete the prompt, omit this field.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_prompt"
    values={[
        { label: 'get_prompt', value: 'get_prompt' },
        { label: 'list_prompts', value: 'list_prompts' }
    ]}
>
<TabItem value="get_prompt">

Retrieves information about the working draft (DRAFT version) of a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see View information about prompts using Prompt management and View information about a version of your prompt in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
createdAt,
customerEncryptionKeyArn,
defaultVariant,
description,
updatedAt,
variants,
version
FROM aws.bedrock_agent.prompts
WHERE prompt_identifier = '{{ prompt_identifier }}' -- required
AND region = '{{ region }}' -- required
AND promptVersion = '{{ promptVersion }}'
;
```
</TabItem>
<TabItem value="list_prompts">

Returns either information about the working draft (DRAFT version) of each prompt in an account, or information about of all versions of a prompt, depending on whether you include the promptIdentifier field or not. For more information, see View information about prompts using Prompt management in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
createdAt,
description,
updatedAt,
version
FROM aws.bedrock_agent.prompts
WHERE region = '{{ region }}' -- required
AND promptIdentifier = '{{ promptIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_prompt"
    values={[
        { label: 'create_prompt', value: 'create_prompt' },
        { label: 'create_prompt_version', value: 'create_prompt_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_prompt">

Creates a prompt in your prompt library that you can add to a flow. For more information, see Prompt management in Amazon Bedrock, Create a prompt using Prompt management and Prompt flows in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock_agent.prompts (
name,
description,
customerEncryptionKeyArn,
defaultVariant,
variants,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ customerEncryptionKeyArn }}',
'{{ defaultVariant }}',
'{{ variants }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
createdAt,
customerEncryptionKeyArn,
defaultVariant,
description,
updatedAt,
variants,
version
;
```
</TabItem>
<TabItem value="create_prompt_version">

Creates a static snapshot of your prompt that can be deployed to production. For more information, see Deploy prompts using Prompt management by creating versions in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock_agent.prompts (
description,
clientToken,
tags,
prompt_identifier,
region
)
SELECT 
'{{ description }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ prompt_identifier }}',
'{{ region }}'
RETURNING
id,
name,
arn,
createdAt,
customerEncryptionKeyArn,
defaultVariant,
description,
updatedAt,
variants,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: prompts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the prompts resource.
    - name: prompt_identifier
      value: "{{ prompt_identifier }}"
      description: Required parameter for the prompts resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: customerEncryptionKeyArn
      value: "{{ customerEncryptionKeyArn }}"
    - name: defaultVariant
      value: "{{ defaultVariant }}"
    - name: variants
      value:
        - name: "{{ name }}"
          templateType: "{{ templateType }}"
          templateConfiguration:
            text:
              text: "{{ text }}"
              cachePoint:
                type_: "{{ type_ }}"
              inputVariables:
                - name: "{{ name }}"
            chat:
              messages:
                - role: "{{ role }}"
                  content: "{{ content }}"
              system:
                - text: "{{ text }}"
                  cachePoint:
                    type_: "{{ type_ }}"
              inputVariables:
                - name: "{{ name }}"
              toolConfiguration:
                tools:
                  - toolSpec:
                      name: "{{ name }}"
                      description: "{{ description }}"
                      inputSchema: "{{ inputSchema }}"
                      strict: {{ strict }}
                    cachePoint:
                      type_: "{{ type_ }}"
                toolChoice:
                  auto: "{{ auto }}"
                  any: "{{ any }}"
                  tool: "{{ tool }}"
          modelId: "{{ modelId }}"
          inferenceConfiguration:
            text:
              temperature: {{ temperature }}
              topP: {{ topP }}
              maxTokens: {{ maxTokens }}
              stopSequences:
                - "{{ stopSequences }}"
          metadata: "{{ metadata }}"
          additionalModelRequestFields: "{{ additionalModelRequestFields }}"
          genAiResource:
            agent:
              agentIdentifier: "{{ agentIdentifier }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_prompt"
    values={[
        { label: 'update_prompt', value: 'update_prompt' }
    ]}
>
<TabItem value="update_prompt">

Modifies a prompt in your prompt library. Include both fields that you want to keep and fields that you want to replace. For more information, see Prompt management in Amazon Bedrock and Edit prompts in your prompt library in the Amazon Bedrock User Guide.

```sql
UPDATE aws.bedrock_agent.prompts
SET 
name = '{{ name }}',
description = '{{ description }}',
customerEncryptionKeyArn = '{{ customerEncryptionKeyArn }}',
defaultVariant = '{{ defaultVariant }}',
variants = '{{ variants }}'
WHERE 
prompt_identifier = '{{ prompt_identifier }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
arn,
createdAt,
customerEncryptionKeyArn,
defaultVariant,
description,
updatedAt,
variants,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_prompt"
    values={[
        { label: 'delete_prompt', value: 'delete_prompt' }
    ]}
>
<TabItem value="delete_prompt">

Deletes a prompt or a version of it, depending on whether you include the promptVersion field or not. For more information, see Delete prompts from the Prompt management tool and Delete a version of a prompt from the Prompt management tool in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock_agent.prompts
WHERE prompt_identifier = '{{ prompt_identifier }}' --required
AND region = '{{ region }}' --required
AND promptVersion = '{{ promptVersion }}'
;
```
</TabItem>
</Tabs>
