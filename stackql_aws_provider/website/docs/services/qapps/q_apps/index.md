--- 
title: q_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - q_apps
  - qapps
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

Creates, updates, deletes, gets or lists a <code>q_apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.q_apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_q_app"
    values={[
        { label: 'get_q_app', value: 'get_q_app' },
        { label: 'list_q_apps', value: 'list_q_apps' }
    ]}
>
<TabItem value="get_q_app">

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
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="appDefinition" /></td>
    <td><code>object</code></td>
    <td>The full definition of the Q App, specifying the cards and flow.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Q App was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="initialPrompt" /></td>
    <td><code>string</code></td>
    <td>The initial prompt displayed when the Q App is started.</td>
</tr>
<tr>
    <td><CopyableCode code="requiredCapabilities" /></td>
    <td><code>array</code></td>
    <td>The capabilities required to run the Q App, such as file upload or third-party integrations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Q App. (PUBLISHED, DRAFT, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the Q App. (pattern: &lt;code&gt;&#91;^&#123;&#125;\\"&lt;&gt;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Q App was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last updated the Q App.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_q_apps">

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
    <td><CopyableCode code="appArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="canEdit" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether the user can edit the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user's association with the Q App was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="isVerified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Q App has been verified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the user's association with the Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="title_" /></td>
    <td><code>string</code></td>
    <td>The title of the Q App. (pattern: &lt;code&gt;&#91;^&#123;&#125;\\"&lt;&gt;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_q_app"><CopyableCode code="get_q_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-appVersion"><code>appVersion</code></a></td>
    <td>Retrieves the full details of an Q App, including its definition specifying the cards and flow.</td>
</tr>
<tr>
    <td><a href="#list_q_apps"><CopyableCode code="list_q_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..</td>
</tr>
<tr>
    <td><a href="#create_q_app"><CopyableCode code="create_q_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-title"><code>title</code></a>, <a href="#parameter-appDefinition"><code>appDefinition</code></a></td>
    <td></td>
    <td>Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts.</td>
</tr>
<tr>
    <td><a href="#update_q_app"><CopyableCode code="update_q_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.</td>
</tr>
<tr>
    <td><a href="#delete_q_app"><CopyableCode code="delete_q_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.</td>
</tr>
<tr>
    <td><a href="#associate_q_app_with_user"><CopyableCode code="associate_q_app_with_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a favorite for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.</td>
</tr>
<tr>
    <td><a href="#disassociate_q_app_from_user"><CopyableCode code="disassociate_q_app_from_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Disassociates a Q App from a user removing the user's access to run the Q App.</td>
</tr>
<tr>
    <td><a href="#start_q_app_session"><CopyableCode code="start_q_app_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-appVersion"><code>appVersion</code></a></td>
    <td></td>
    <td>Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run. Each Q App session will be condensed into a single conversation in the web experience.</td>
</tr>
<tr>
    <td><a href="#stop_q_app_session"><CopyableCode code="stop_q_app_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td></td>
    <td>Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.</td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App to retrieve.</td>
</tr>
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-appVersion">
    <td><CopyableCode code="appVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the Q App.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Q Apps to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_q_app"
    values={[
        { label: 'get_q_app', value: 'get_q_app' },
        { label: 'list_q_apps', value: 'list_q_apps' }
    ]}
>
<TabItem value="get_q_app">

Retrieves the full details of an Q App, including its definition specifying the cards and flow.

```sql
SELECT
appArn,
appDefinition,
appId,
appVersion,
createdAt,
createdBy,
description,
initialPrompt,
requiredCapabilities,
status,
title_,
updatedAt,
updatedBy
FROM aws.qapps.q_apps
WHERE `instance-id` = '{{ instance-id }}' -- required
AND appId = '{{ appId }}' -- required
AND region = '{{ region }}' -- required
AND appVersion = '{{ appVersion }}'
;
```
</TabItem>
<TabItem value="list_q_apps">

Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..

```sql
SELECT
appArn,
appId,
canEdit,
createdAt,
description,
isVerified,
status,
title_
FROM aws.qapps.q_apps
WHERE `instance-id` = '{{ instance-id }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_q_app"
    values={[
        { label: 'create_q_app', value: 'create_q_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_q_app">

Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts.

```sql
INSERT INTO aws.qapps.q_apps (
title,
description,
appDefinition,
tags,
`instance-id`,
region
)
SELECT 
'{{ title }}' /* required */,
'{{ description }}',
'{{ appDefinition }}' /* required */,
'{{ tags }}',
'{{ instance-id }}',
'{{ region }}'
RETURNING
appArn,
appId,
appVersion,
createdAt,
createdBy,
description,
initialPrompt,
requiredCapabilities,
status,
title_,
updatedAt,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: q_apps
  props:
    - name: instance-id
      value: "{{ instance-id }}"
      description: Required parameter for the q_apps resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the q_apps resource.
    - name: title
      value: "{{ title }}"
    - name: description
      value: "{{ description }}"
    - name: appDefinition
      description: |
        The input for defining an Q App.
      value:
        cards:
          - textInput:
              title_: "{{ title_ }}"
              id: "{{ id }}"
              type_: "{{ type_ }}"
              placeholder: "{{ placeholder }}"
              defaultValue: "{{ defaultValue }}"
            qQuery:
              title_: "{{ title_ }}"
              id: "{{ id }}"
              type_: "{{ type_ }}"
              prompt: "{{ prompt }}"
              outputSource: "{{ outputSource }}"
              attributeFilter:
                andAllFilters:
                  - andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter:
                      andAllFilters: "{{ andAllFilters }}"
                      orAllFilters: "{{ orAllFilters }}"
                      notFilter: "{{ notFilter }}"
                      equalsTo: "{{ equalsTo }}"
                      containsAll: "{{ containsAll }}"
                      containsAny: "{{ containsAny }}"
                      greaterThan: "{{ greaterThan }}"
                      greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                      lessThan: "{{ lessThan }}"
                      lessThanOrEquals: "{{ lessThanOrEquals }}"
                    equalsTo:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAll:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAny:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                orAllFilters:
                  - andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter:
                      andAllFilters: "{{ andAllFilters }}"
                      orAllFilters: "{{ orAllFilters }}"
                      notFilter: "{{ notFilter }}"
                      equalsTo: "{{ equalsTo }}"
                      containsAll: "{{ containsAll }}"
                      containsAny: "{{ containsAny }}"
                      greaterThan: "{{ greaterThan }}"
                      greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                      lessThan: "{{ lessThan }}"
                      lessThanOrEquals: "{{ lessThanOrEquals }}"
                    equalsTo:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAll:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    containsAny:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    greaterThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThan:
                      name: "{{ name }}"
                      value: "{{ value }}"
                    lessThanOrEquals:
                      name: "{{ name }}"
                      value: "{{ value }}"
                notFilter:
                  andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter: "{{ notFilter }}"
                  equalsTo: "{{ equalsTo }}"
                  containsAll: "{{ containsAll }}"
                  containsAny: "{{ containsAny }}"
                  greaterThan: "{{ greaterThan }}"
                  greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                  lessThan: "{{ lessThan }}"
                  lessThanOrEquals: "{{ lessThanOrEquals }}"
                equalsTo:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAll:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAny:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
            qPlugin:
              title_: "{{ title_ }}"
              id: "{{ id }}"
              type_: "{{ type_ }}"
              prompt: "{{ prompt }}"
              pluginId: "{{ pluginId }}"
              actionIdentifier: "{{ actionIdentifier }}"
            fileUpload:
              title_: "{{ title_ }}"
              id: "{{ id }}"
              type_: "{{ type_ }}"
              filename: "{{ filename }}"
              fileId: "{{ fileId }}"
              allowOverride: {{ allowOverride }}
            formInput:
              title_: "{{ title_ }}"
              id: "{{ id }}"
              type_: "{{ type_ }}"
              metadata:
                schema: "{{ schema }}"
              computeMode: "{{ computeMode }}"
        initialPrompt: "{{ initialPrompt }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_q_app"
    values={[
        { label: 'update_q_app', value: 'update_q_app' }
    ]}
>
<TabItem value="update_q_app">

Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.

```sql
UPDATE aws.qapps.q_apps
SET 
appId = '{{ appId }}',
title = '{{ title }}',
description = '{{ description }}',
appDefinition = '{{ appDefinition }}'
WHERE 
`instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
AND appId = '{{ appId }}' --required
RETURNING
appArn,
appId,
appVersion,
createdAt,
createdBy,
description,
initialPrompt,
requiredCapabilities,
status,
title_,
updatedAt,
updatedBy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_q_app"
    values={[
        { label: 'delete_q_app', value: 'delete_q_app' }
    ]}
>
<TabItem value="delete_q_app">

Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.

```sql
DELETE FROM aws.qapps.q_apps
WHERE `instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="associate_q_app_with_user"
    values={[
        { label: 'associate_q_app_with_user', value: 'associate_q_app_with_user' },
        { label: 'disassociate_q_app_from_user', value: 'disassociate_q_app_from_user' },
        { label: 'start_q_app_session', value: 'start_q_app_session' },
        { label: 'stop_q_app_session', value: 'stop_q_app_session' }
    ]}
>
<TabItem value="associate_q_app_with_user">

This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a favorite for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.

```sql
EXEC aws.qapps.q_apps.associate_q_app_with_user 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"appId": "{{ appId }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_q_app_from_user">

Disassociates a Q App from a user removing the user's access to run the Q App.

```sql
EXEC aws.qapps.q_apps.disassociate_q_app_from_user 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"appId": "{{ appId }}"
}'
;
```
</TabItem>
<TabItem value="start_q_app_session">

Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run. Each Q App session will be condensed into a single conversation in the web experience.

```sql
EXEC aws.qapps.q_apps.start_q_app_session 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"appId": "{{ appId }}", 
"appVersion": {{ appVersion }}, 
"initialValues": "{{ initialValues }}", 
"sessionId": "{{ sessionId }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
<TabItem value="stop_q_app_session">

Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.

```sql
EXEC aws.qapps.q_apps.stop_q_app_session 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"sessionId": "{{ sessionId }}"
}'
;
```
</TabItem>
</Tabs>
