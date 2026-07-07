--- 
title: web_experiences
hide_title: false
hide_table_of_contents: false
keywords:
  - web_experiences
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>web_experiences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_experiences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.web_experiences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_experience"
    values={[
        { label: 'get_web_experience', value: 'get_web_experience' },
        { label: 'list_web_experiences', value: 'list_web_experiences' }
    ]}
>
<TabItem value="get_web_experience">

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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application linked to the web experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authenticationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The authentication configuration information for your Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><CopyableCode code="browserExtensionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The container for browser extension configuration for an Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business web experience was last created.</td>
</tr>
<tr>
    <td><CopyableCode code="customizationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEndpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint of your Amazon Q Business web experience. (pattern: &lt;code&gt;(https?|ftp|file):​//(&#91;^\s&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides information about a Amazon Q Business request error.</td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><CopyableCode code="origins" /></td>
    <td><code>array</code></td>
    <td>Gets the website domain origins that are allowed to embed the Amazon Q Business web experience. The domain origin refers to the base URL for accessing a website including the protocol (http/https), the domain name, and the port number (if specified).</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role attached to your web experience. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="samplePromptsControlMode" /></td>
    <td><code>string</code></td>
    <td>Determines whether sample prompts are enabled in the web experience for an end user. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Amazon Q Business web experience. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail. (CREATING, ACTIVE, DELETING, FAILED, PENDING_AUTH_CONFIG)</td>
</tr>
<tr>
    <td><CopyableCode code="subtitle" /></td>
    <td><code>string</code></td>
    <td>The subtitle for your Amazon Q Business web experience. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title for your Amazon Q Business web experience. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business web experience was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webExperienceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role with the permission to access the Amazon Q Business web experience and required resources. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="webExperienceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business web experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="welcomeMessage" /></td>
    <td><code>string</code></td>
    <td>The customized welcome message for end users of an Amazon Q Business web experience.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_web_experiences">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultEndpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URLs for your Amazon Q Business web experience. The URLs are unique and fully hosted by Amazon Web Services. (pattern: &lt;code&gt;(https?|ftp|file):​//(&#91;^\s&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your Amazon Q Business web experience. (CREATING, ACTIVE, DELETING, FAILED, PENDING_AUTH_CONFIG)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when your Amazon Q Business web experience was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="webExperienceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of your Amazon Q Business web experience. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_web_experience"><CopyableCode code="get_web_experience" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-web_experience_id"><code>web_experience_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><a href="#list_web_experiences"><CopyableCode code="list_web_experiences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists one or more Amazon Q Business Web Experiences.</td>
</tr>
<tr>
    <td><a href="#create_anonymous_web_experience_url"><CopyableCode code="create_anonymous_web_experience_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-web_experience_id"><code>web_experience_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.</td>
</tr>
<tr>
    <td><a href="#create_web_experience"><CopyableCode code="create_web_experience" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><a href="#update_web_experience"><CopyableCode code="update_web_experience" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-web_experience_id"><code>web_experience_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Q Business web experience.</td>
</tr>
<tr>
    <td><a href="#delete_web_experience"><CopyableCode code="delete_web_experience" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-web_experience_id"><code>web_experience_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q Business web experience.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application linked to the Amazon Q Business web experience.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-web_experience_id">
    <td><CopyableCode code="web_experience_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business web experience being deleted.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Amazon Q Business Web Experiences to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_web_experience"
    values={[
        { label: 'get_web_experience', value: 'get_web_experience' },
        { label: 'list_web_experiences', value: 'list_web_experiences' }
    ]}
>
<TabItem value="get_web_experience">

Gets information about an existing Amazon Q Business web experience.

```sql
SELECT
applicationId,
authenticationConfiguration,
browserExtensionConfiguration,
createdAt,
customizationConfiguration,
defaultEndpoint,
error,
identityProviderConfiguration,
origins,
roleArn,
samplePromptsControlMode,
status,
subtitle,
title_,
updatedAt,
webExperienceArn,
webExperienceId,
welcomeMessage
FROM aws.qbusiness.web_experiences
WHERE application_id = '{{ application_id }}' -- required
AND web_experience_id = '{{ web_experience_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_web_experiences">

Lists one or more Amazon Q Business Web Experiences.

```sql
SELECT
createdAt,
defaultEndpoint,
status,
updatedAt,
webExperienceId
FROM aws.qbusiness.web_experiences
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_anonymous_web_experience_url"
    values={[
        { label: 'create_anonymous_web_experience_url', value: 'create_anonymous_web_experience_url' },
        { label: 'create_web_experience', value: 'create_web_experience' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_anonymous_web_experience_url">

Creates a unique URL for anonymous Amazon Q Business web experience. This URL can only be used once and must be used within 5 minutes after it's generated.

```sql
INSERT INTO aws.qbusiness.web_experiences (
sessionDurationInMinutes,
application_id,
web_experience_id,
region
)
SELECT 
{{ sessionDurationInMinutes }},
'{{ application_id }}',
'{{ web_experience_id }}',
'{{ region }}'
RETURNING
anonymousUrl
;
```
</TabItem>
<TabItem value="create_web_experience">

Creates an Amazon Q Business web experience.

```sql
INSERT INTO aws.qbusiness.web_experiences (
title,
subtitle,
welcomeMessage,
samplePromptsControlMode,
origins,
roleArn,
tags,
clientToken,
identityProviderConfiguration,
browserExtensionConfiguration,
customizationConfiguration,
application_id,
region
)
SELECT 
'{{ title }}',
'{{ subtitle }}',
'{{ welcomeMessage }}',
'{{ samplePromptsControlMode }}',
'{{ origins }}',
'{{ roleArn }}',
'{{ tags }}',
'{{ clientToken }}',
'{{ identityProviderConfiguration }}',
'{{ browserExtensionConfiguration }}',
'{{ customizationConfiguration }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
webExperienceArn,
webExperienceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: web_experiences
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the web_experiences resource.
    - name: web_experience_id
      value: "{{ web_experience_id }}"
      description: Required parameter for the web_experiences resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the web_experiences resource.
    - name: sessionDurationInMinutes
      value: {{ sessionDurationInMinutes }}
    - name: title
      value: "{{ title }}"
    - name: subtitle
      value: "{{ subtitle }}"
    - name: welcomeMessage
      value: "{{ welcomeMessage }}"
    - name: samplePromptsControlMode
      value: "{{ samplePromptsControlMode }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: origins
      value:
        - "{{ origins }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: identityProviderConfiguration
      description: |
        Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
      value:
        samlConfiguration:
          authenticationUrl: "{{ authenticationUrl }}"
        openIDConnectConfiguration:
          secretsArn: "{{ secretsArn }}"
          secretsRole: "{{ secretsRole }}"
    - name: browserExtensionConfiguration
      description: |
        The container for browser extension configuration for an Amazon Q Business web experience.
      value:
        enabledBrowserExtensions:
          - "{{ enabledBrowserExtensions }}"
    - name: customizationConfiguration
      description: |
        Contains the configuration information to customize the logo, font, and color of an Amazon Q Business web experience with individual files for each property or a CSS file for them all.
      value:
        customCSSUrl: "{{ customCSSUrl }}"
        logoUrl: "{{ logoUrl }}"
        fontUrl: "{{ fontUrl }}"
        faviconUrl: "{{ faviconUrl }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_web_experience"
    values={[
        { label: 'update_web_experience', value: 'update_web_experience' }
    ]}
>
<TabItem value="update_web_experience">

Updates an Amazon Q Business web experience.

```sql
UPDATE aws.qbusiness.web_experiences
SET 
roleArn = '{{ roleArn }}',
authenticationConfiguration = '{{ authenticationConfiguration }}',
title = '{{ title }}',
subtitle = '{{ subtitle }}',
welcomeMessage = '{{ welcomeMessage }}',
samplePromptsControlMode = '{{ samplePromptsControlMode }}',
identityProviderConfiguration = '{{ identityProviderConfiguration }}',
origins = '{{ origins }}',
browserExtensionConfiguration = '{{ browserExtensionConfiguration }}',
customizationConfiguration = '{{ customizationConfiguration }}'
WHERE 
application_id = '{{ application_id }}' --required
AND web_experience_id = '{{ web_experience_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_experience"
    values={[
        { label: 'delete_web_experience', value: 'delete_web_experience' }
    ]}
>
<TabItem value="delete_web_experience">

Deletes an Amazon Q Business web experience.

```sql
DELETE FROM aws.qbusiness.web_experiences
WHERE application_id = '{{ application_id }}' --required
AND web_experience_id = '{{ web_experience_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
