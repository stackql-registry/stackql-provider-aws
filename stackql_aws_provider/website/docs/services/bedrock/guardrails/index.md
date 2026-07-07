--- 
title: guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - guardrails
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>guardrails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="guardrails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.guardrails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_guardrail"
    values={[
        { label: 'get_guardrail', value: 'get_guardrail' },
        { label: 'list_guardrails', value: 'list_guardrails' }
    ]}
>
<TabItem value="get_guardrail">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the guardrail. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="automatedReasoningPolicy" /></td>
    <td><code>object</code></td>
    <td>The current Automated Reasoning policy configuration for the guardrail, if any is configured.</td>
</tr>
<tr>
    <td><CopyableCode code="blockedInputMessaging" /></td>
    <td><code>string</code></td>
    <td>The message that the guardrail returns when it blocks a prompt.</td>
</tr>
<tr>
    <td><CopyableCode code="blockedOutputsMessaging" /></td>
    <td><code>string</code></td>
    <td>The message that the guardrail returns when it blocks a model response.</td>
</tr>
<tr>
    <td><CopyableCode code="contentPolicy" /></td>
    <td><code>object</code></td>
    <td>The content policy that was configured for the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="contextualGroundingPolicy" /></td>
    <td><code>object</code></td>
    <td>The contextual grounding policy used in the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the guardrail was created.</td>
</tr>
<tr>
    <td><CopyableCode code="crossRegionDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the system-defined guardrail profile that you're using with your guardrail, including the guardrail profile ID and Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="failureRecommendations" /></td>
    <td><code>array</code></td>
    <td>Appears if the status of the guardrail is FAILED. A list of recommendations to carry out before retrying the request.</td>
</tr>
<tr>
    <td><CopyableCode code="guardrailArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the guardrail. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:guardrail/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrailId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the guardrail. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key that encrypts the guardrail. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitiveInformationPolicy" /></td>
    <td><code>object</code></td>
    <td>The sensitive information policy that was configured for the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the guardrail. (CREATING, UPDATING, VERSIONING, READY, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReasons" /></td>
    <td><code>array</code></td>
    <td>Appears if the status is FAILED. A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="topicPolicy" /></td>
    <td><code>object</code></td>
    <td>The topic policy that was configured for the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the guardrail was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the guardrail. (pattern: &lt;code&gt;((&#91;1-9&#93;&#91;0-9&#93;&#123;0,7&#125;)|(DRAFT))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="wordPolicy" /></td>
    <td><code>object</code></td>
    <td>The word policy that was configured for the guardrail.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_guardrails">

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
    <td>The unique identifier of the guardrail. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the guardrail. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the guardrail. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:guardrail/&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the guardrail was created.</td>
</tr>
<tr>
    <td><CopyableCode code="crossRegionDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the system-defined guardrail profile that you're using with your guardrail, including the guardrail profile ID and Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the guardrail. (CREATING, UPDATING, VERSIONING, READY, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the guardrail was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the guardrail. (pattern: &lt;code&gt;((&#91;1-9&#93;&#91;0-9&#93;&#123;0,7&#125;)|(DRAFT))&lt;/code&gt;)</td>
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
    <td><a href="#get_guardrail"><CopyableCode code="get_guardrail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-guardrail_identifier"><code>guardrail_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-guardrailVersion"><code>guardrailVersion</code></a></td>
    <td>Gets details about a guardrail. If you don't specify a version, the response returns details for the DRAFT version.</td>
</tr>
<tr>
    <td><a href="#list_guardrails"><CopyableCode code="list_guardrails" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-guardrailIdentifier"><code>guardrailIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists details about all the guardrails in an account. To list the DRAFT version of all your guardrails, don't specify the guardrailIdentifier field. To list all versions of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field. You can set the maximum number of results to return in a response in the maxResults field. If there are more results than the number you set, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.</td>
</tr>
<tr>
    <td><a href="#create_guardrail"><CopyableCode code="create_guardrail" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-blockedInputMessaging"><code>blockedInputMessaging</code></a>, <a href="#parameter-blockedOutputsMessaging"><code>blockedOutputsMessaging</code></a></td>
    <td></td>
    <td>Creates a guardrail to block topics and to implement safeguards for your generative AI applications. You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection. Content filters - Adjust filter strengths to block input prompts or model responses containing harmful content. Denied topics - Define a set of topics that are undesirable in the context of your application. These topics will be blocked if detected in user queries or model responses. Word filters - Configure filters to block undesirable words, phrases, and profanity. Such words can include offensive terms, competitor names etc. Sensitive information filters - Block or mask sensitive information such as personally identifiable information (PII) or custom regex in user inputs and model responses. In addition to the above policies, you can also configure the messages to be returned to the user if a user input or model response is in violation of the policies defined in the guardrail. For more information, see Amazon Bedrock Guardrails in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_guardrail_version"><CopyableCode code="create_guardrail_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-guardrail_identifier"><code>guardrail_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a version of the guardrail. Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.</td>
</tr>
<tr>
    <td><a href="#update_guardrail"><CopyableCode code="update_guardrail" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-guardrail_identifier"><code>guardrail_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-blockedInputMessaging"><code>blockedInputMessaging</code></a>, <a href="#parameter-blockedOutputsMessaging"><code>blockedOutputsMessaging</code></a></td>
    <td></td>
    <td>Updates a guardrail with the values you specify. Specify a name and optional description. Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields. Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic. Give a name and description so that the guardrail can properly identify the topic. Specify DENY in the type field. (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list. Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig. Specify the category in the type field. Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig. (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.</td>
</tr>
<tr>
    <td><a href="#delete_guardrail"><CopyableCode code="delete_guardrail" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-guardrail_identifier"><code>guardrail_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-guardrailVersion"><code>guardrailVersion</code></a></td>
    <td>Deletes a guardrail. To delete a guardrail, only specify the ARN of the guardrail in the guardrailIdentifier field. If you delete a guardrail, all of its versions will be deleted. To delete a version of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field and the version in the guardrailVersion field.</td>
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
<tr id="parameter-guardrail_identifier">
    <td><CopyableCode code="guardrail_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the guardrail. This can be an ID or the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-guardrailIdentifier">
    <td><CopyableCode code="guardrailIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the guardrail. This can be an ID or the ARN.</td>
</tr>
<tr id="parameter-guardrailVersion">
    <td><CopyableCode code="guardrailVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the guardrail.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more results than were returned in the response, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_guardrail"
    values={[
        { label: 'get_guardrail', value: 'get_guardrail' },
        { label: 'list_guardrails', value: 'list_guardrails' }
    ]}
>
<TabItem value="get_guardrail">

Gets details about a guardrail. If you don't specify a version, the response returns details for the DRAFT version.

```sql
SELECT
name,
automatedReasoningPolicy,
blockedInputMessaging,
blockedOutputsMessaging,
contentPolicy,
contextualGroundingPolicy,
createdAt,
crossRegionDetails,
description,
failureRecommendations,
guardrailArn,
guardrailId,
kmsKeyArn,
sensitiveInformationPolicy,
status,
statusReasons,
topicPolicy,
updatedAt,
version,
wordPolicy
FROM aws.bedrock.guardrails
WHERE guardrail_identifier = '{{ guardrail_identifier }}' -- required
AND region = '{{ region }}' -- required
AND guardrailVersion = '{{ guardrailVersion }}'
;
```
</TabItem>
<TabItem value="list_guardrails">

Lists details about all the guardrails in an account. To list the DRAFT version of all your guardrails, don't specify the guardrailIdentifier field. To list all versions of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field. You can set the maximum number of results to return in a response in the maxResults field. If there are more results than the number you set, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.

```sql
SELECT
id,
name,
arn,
createdAt,
crossRegionDetails,
description,
status,
updatedAt,
version
FROM aws.bedrock.guardrails
WHERE region = '{{ region }}' -- required
AND guardrailIdentifier = '{{ guardrailIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_guardrail"
    values={[
        { label: 'create_guardrail', value: 'create_guardrail' },
        { label: 'create_guardrail_version', value: 'create_guardrail_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_guardrail">

Creates a guardrail to block topics and to implement safeguards for your generative AI applications. You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection. Content filters - Adjust filter strengths to block input prompts or model responses containing harmful content. Denied topics - Define a set of topics that are undesirable in the context of your application. These topics will be blocked if detected in user queries or model responses. Word filters - Configure filters to block undesirable words, phrases, and profanity. Such words can include offensive terms, competitor names etc. Sensitive information filters - Block or mask sensitive information such as personally identifiable information (PII) or custom regex in user inputs and model responses. In addition to the above policies, you can also configure the messages to be returned to the user if a user input or model response is in violation of the policies defined in the guardrail. For more information, see Amazon Bedrock Guardrails in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock.guardrails (
name,
description,
topicPolicyConfig,
contentPolicyConfig,
wordPolicyConfig,
sensitiveInformationPolicyConfig,
contextualGroundingPolicyConfig,
automatedReasoningPolicyConfig,
crossRegionConfig,
blockedInputMessaging,
blockedOutputsMessaging,
kmsKeyId,
tags,
clientRequestToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ topicPolicyConfig }}',
'{{ contentPolicyConfig }}',
'{{ wordPolicyConfig }}',
'{{ sensitiveInformationPolicyConfig }}',
'{{ contextualGroundingPolicyConfig }}',
'{{ automatedReasoningPolicyConfig }}',
'{{ crossRegionConfig }}',
'{{ blockedInputMessaging }}' /* required */,
'{{ blockedOutputsMessaging }}' /* required */,
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ clientRequestToken }}',
'{{ region }}'
RETURNING
createdAt,
guardrailArn,
guardrailId,
version
;
```
</TabItem>
<TabItem value="create_guardrail_version">

Creates a version of the guardrail. Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.

```sql
INSERT INTO aws.bedrock.guardrails (
description,
clientRequestToken,
guardrail_identifier,
region
)
SELECT 
'{{ description }}',
'{{ clientRequestToken }}',
'{{ guardrail_identifier }}',
'{{ region }}'
RETURNING
guardrailId,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: guardrails
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the guardrails resource.
    - name: guardrail_identifier
      value: "{{ guardrail_identifier }}"
      description: Required parameter for the guardrails resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: topicPolicyConfig
      description: |
        Contains details about topics that the guardrail should identify and deny.
      value:
        topicsConfig:
          - name: "{{ name }}"
            definition: "{{ definition }}"
            examples: "{{ examples }}"
            type_: "{{ type_ }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
        tierConfig:
          tierName: "{{ tierName }}"
    - name: contentPolicyConfig
      description: |
        Contains details about how to handle harmful content.
      value:
        filtersConfig:
          - type_: "{{ type_ }}"
            inputStrength: "{{ inputStrength }}"
            outputStrength: "{{ outputStrength }}"
            inputModalities: "{{ inputModalities }}"
            outputModalities: "{{ outputModalities }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
        tierConfig:
          tierName: "{{ tierName }}"
    - name: wordPolicyConfig
      description: |
        Contains details about the word policy to configured for the guardrail.
      value:
        wordsConfig:
          - text: "{{ text }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
        managedWordListsConfig:
          - type_: "{{ type_ }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
    - name: sensitiveInformationPolicyConfig
      description: |
        Contains details about PII entities and regular expressions to configure for the guardrail.
      value:
        piiEntitiesConfig:
          - type_: "{{ type_ }}"
            action: "{{ action }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
        regexesConfig:
          - name: "{{ name }}"
            description: "{{ description }}"
            pattern_: "{{ pattern_ }}"
            action: "{{ action }}"
            inputAction: "{{ inputAction }}"
            outputAction: "{{ outputAction }}"
            inputEnabled: {{ inputEnabled }}
            outputEnabled: {{ outputEnabled }}
    - name: contextualGroundingPolicyConfig
      description: |
        The policy configuration details for the guardrails contextual grounding policy.
      value:
        filtersConfig:
          - type_: "{{ type_ }}"
            threshold: {{ threshold }}
            action: "{{ action }}"
            enabled: {{ enabled }}
    - name: automatedReasoningPolicyConfig
      description: |
        Configuration settings for integrating Automated Reasoning policies with Amazon Bedrock Guardrails.
      value:
        policies:
          - "{{ policies }}"
        confidenceThreshold: {{ confidenceThreshold }}
    - name: crossRegionConfig
      description: |
        The system-defined guardrail profile that you're using with your guardrail. Guardrail profiles define the destination Amazon Web Services Regions where guardrail inference requests can be automatically routed. Using guardrail profiles helps maintain guardrail performance and reliability when demand increases. For more information, see the Amazon Bedrock User Guide.
      value:
        guardrailProfileIdentifier: "{{ guardrailProfileIdentifier }}"
    - name: blockedInputMessaging
      value: "{{ blockedInputMessaging }}"
    - name: blockedOutputsMessaging
      value: "{{ blockedOutputsMessaging }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_guardrail"
    values={[
        { label: 'update_guardrail', value: 'update_guardrail' }
    ]}
>
<TabItem value="update_guardrail">

Updates a guardrail with the values you specify. Specify a name and optional description. Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields. Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic. Give a name and description so that the guardrail can properly identify the topic. Specify DENY in the type field. (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list. Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig. Specify the category in the type field. Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig. (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.

```sql
UPDATE aws.bedrock.guardrails
SET 
name = '{{ name }}',
description = '{{ description }}',
topicPolicyConfig = '{{ topicPolicyConfig }}',
contentPolicyConfig = '{{ contentPolicyConfig }}',
wordPolicyConfig = '{{ wordPolicyConfig }}',
sensitiveInformationPolicyConfig = '{{ sensitiveInformationPolicyConfig }}',
contextualGroundingPolicyConfig = '{{ contextualGroundingPolicyConfig }}',
automatedReasoningPolicyConfig = '{{ automatedReasoningPolicyConfig }}',
crossRegionConfig = '{{ crossRegionConfig }}',
blockedInputMessaging = '{{ blockedInputMessaging }}',
blockedOutputsMessaging = '{{ blockedOutputsMessaging }}',
kmsKeyId = '{{ kmsKeyId }}'
WHERE 
guardrail_identifier = '{{ guardrail_identifier }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND blockedInputMessaging = '{{ blockedInputMessaging }}' --required
AND blockedOutputsMessaging = '{{ blockedOutputsMessaging }}' --required
RETURNING
guardrailArn,
guardrailId,
updatedAt,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_guardrail"
    values={[
        { label: 'delete_guardrail', value: 'delete_guardrail' }
    ]}
>
<TabItem value="delete_guardrail">

Deletes a guardrail. To delete a guardrail, only specify the ARN of the guardrail in the guardrailIdentifier field. If you delete a guardrail, all of its versions will be deleted. To delete a version of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field and the version in the guardrailVersion field.

```sql
DELETE FROM aws.bedrock.guardrails
WHERE guardrail_identifier = '{{ guardrail_identifier }}' --required
AND region = '{{ region }}' --required
AND guardrailVersion = '{{ guardrailVersion }}'
;
```
</TabItem>
</Tabs>
