--- 
title: content_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - content_associations
  - qconnect
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

Creates, updates, deletes, gets or lists a <code>content_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="content_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.content_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_content_association"
    values={[
        { label: 'get_content_association', value: 'get_content_association' },
        { label: 'list_content_associations', value: 'list_content_associations' }
    ]}
>
<TabItem value="get_content_association">

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
    <td><CopyableCode code="associationData" /></td>
    <td><code>object</code></td>
    <td>The contents of a content association.</td>
</tr>
<tr>
    <td><CopyableCode code="associationType" /></td>
    <td><code>string</code></td>
    <td>The type of association. (AMAZON_CONNECT_GUIDE)</td>
</tr>
<tr>
    <td><CopyableCode code="contentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the content. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the content association. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentAssociationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_content_associations">

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
    <td><CopyableCode code="associationData" /></td>
    <td><code>object</code></td>
    <td>The contents of a content association.</td>
</tr>
<tr>
    <td><CopyableCode code="associationType" /></td>
    <td><code>string</code></td>
    <td>The type of association. (AMAZON_CONNECT_GUIDE)</td>
</tr>
<tr>
    <td><CopyableCode code="contentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the content. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the content association. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentAssociationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the knowledge base. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="knowledgeBaseId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_content_association"><CopyableCode code="get_content_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-content_id"><code>content_id</code></a>, <a href="#parameter-content_association_id"><code>content_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the content association. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#list_content_associations"><CopyableCode code="list_content_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-content_id"><code>content_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the content associations. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#create_content_association"><CopyableCode code="create_content_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-content_id"><code>content_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-associationType"><code>associationType</code></a>, <a href="#parameter-association"><code>association</code></a></td>
    <td></td>
    <td>Creates an association between a content resource in a knowledge base and step-by-step guides. Step-by-step guides offer instructions to agents for resolving common customer issues. You create a content association to integrate Amazon Q in Connect and step-by-step guides. After you integrate Amazon Q and step-by-step guides, when Amazon Q provides a recommendation to an agent based on the intent that it's detected, it also provides them with the option to start the step-by-step guide that you have associated with the content. Note the following limitations: You can create only one content association for each content resource in a knowledge base. You can associate a step-by-step guide with multiple content resources. For more information, see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#delete_content_association"><CopyableCode code="delete_content_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-content_id"><code>content_id</code></a>, <a href="#parameter-content_association_id"><code>content_association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the content association. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.</td>
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
<tr id="parameter-content_association_id">
    <td><CopyableCode code="content_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content association. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-content_id">
    <td><CopyableCode code="content_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the content.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_content_association"
    values={[
        { label: 'get_content_association', value: 'get_content_association' },
        { label: 'list_content_associations', value: 'list_content_associations' }
    ]}
>
<TabItem value="get_content_association">

Returns the content association. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.

```sql
SELECT
associationData,
associationType,
contentArn,
contentAssociationArn,
contentAssociationId,
contentId,
knowledgeBaseArn,
knowledgeBaseId,
tags
FROM aws.qconnect.content_associations
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND content_id = '{{ content_id }}' -- required
AND content_association_id = '{{ content_association_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_content_associations">

Lists the content associations. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.

```sql
SELECT
associationData,
associationType,
contentArn,
contentAssociationArn,
contentAssociationId,
contentId,
knowledgeBaseArn,
knowledgeBaseId,
tags
FROM aws.qconnect.content_associations
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND content_id = '{{ content_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_content_association"
    values={[
        { label: 'create_content_association', value: 'create_content_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_content_association">

Creates an association between a content resource in a knowledge base and step-by-step guides. Step-by-step guides offer instructions to agents for resolving common customer issues. You create a content association to integrate Amazon Q in Connect and step-by-step guides. After you integrate Amazon Q and step-by-step guides, when Amazon Q provides a recommendation to an agent based on the intent that it's detected, it also provides them with the option to start the step-by-step guide that you have associated with the content. Note the following limitations: You can create only one content association for each content resource in a knowledge base. You can associate a step-by-step guide with multiple content resources. For more information, see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.

```sql
INSERT INTO aws.qconnect.content_associations (
clientToken,
associationType,
association,
tags,
knowledge_base_id,
content_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ associationType }}' /* required */,
'{{ association }}' /* required */,
'{{ tags }}',
'{{ knowledge_base_id }}',
'{{ content_id }}',
'{{ region }}'
RETURNING
contentAssociation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: content_associations
  props:
    - name: knowledge_base_id
      value: "{{ knowledge_base_id }}"
      description: Required parameter for the content_associations resource.
    - name: content_id
      value: "{{ content_id }}"
      description: Required parameter for the content_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the content_associations resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: associationType
      value: "{{ associationType }}"
      valid_values: ['AMAZON_CONNECT_GUIDE']
    - name: association
      description: |
        The contents of a content association.
      value:
        amazonConnectGuideAssociation:
          flowId: "{{ flowId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_content_association"
    values={[
        { label: 'delete_content_association', value: 'delete_content_association' }
    ]}
>
<TabItem value="delete_content_association">

Deletes the content association. For more information about content associations--what they are and when they are used--see Integrate Amazon Q in Connect with step-by-step guides in the Amazon Connect Administrator Guide.

```sql
DELETE FROM aws.qconnect.content_associations
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND content_id = '{{ content_id }}' --required
AND content_association_id = '{{ content_association_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
