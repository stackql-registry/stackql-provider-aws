--- 
title: theme_for_stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - theme_for_stacks
  - appstream
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

Creates, updates, deletes, gets or lists a <code>theme_for_stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="theme_for_stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.theme_for_stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_theme_for_stack"
    values={[
        { label: 'describe_theme_for_stack', value: 'describe_theme_for_stack' }
    ]}
>
<TabItem value="describe_theme_for_stack">

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
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the theme was created.</td>
</tr>
<tr>
    <td><CopyableCode code="StackName" /></td>
    <td><code>string</code></td>
    <td>The stack that has the custom branding theme. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_.-&#93;&#123;0,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the theme. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeFaviconURL" /></td>
    <td><code>string</code></td>
    <td>The URL of the icon that displays at the top of a user's browser tab during streaming sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeFooterLinks" /></td>
    <td><code>array</code></td>
    <td>The website links that display in the catalog page footer.</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeOrganizationLogoURL" /></td>
    <td><code>string</code></td>
    <td>The URL of the logo that displays in the catalog page header.</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeStyling" /></td>
    <td><code>string</code></td>
    <td>The color that is used for the website links, text, buttons, and catalog page background. (LIGHT_BLUE, BLUE, PINK, RED)</td>
</tr>
<tr>
    <td><CopyableCode code="ThemeTitleText" /></td>
    <td><code>string</code></td>
    <td>The browser tab page title. (pattern: &lt;code&gt;^&#91;-@./#&+\w\s&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_theme_for_stack"><CopyableCode code="describe_theme_for_stack" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes the theme for a specified stack. A theme is custom branding that customizes the appearance of the streaming application catalog page.</td>
</tr>
<tr>
    <td><a href="#create_theme_for_stack"><CopyableCode code="create_theme_for_stack" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a>, <a href="#parameter-TitleText"><code>TitleText</code></a>, <a href="#parameter-ThemeStyling"><code>ThemeStyling</code></a>, <a href="#parameter-OrganizationLogoS3Location"><code>OrganizationLogoS3Location</code></a>, <a href="#parameter-FaviconS3Location"><code>FaviconS3Location</code></a></td>
    <td></td>
    <td>Creates custom branding that customizes the appearance of the streaming application catalog page.</td>
</tr>
<tr>
    <td><a href="#update_theme_for_stack"><CopyableCode code="update_theme_for_stack" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StackName"><code>StackName</code></a></td>
    <td></td>
    <td>Updates custom branding that customizes the appearance of the streaming application catalog page.</td>
</tr>
<tr>
    <td><a href="#delete_theme_for_stack"><CopyableCode code="delete_theme_for_stack" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes custom branding that customizes the appearance of the streaming application catalog page.</td>
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
    defaultValue="describe_theme_for_stack"
    values={[
        { label: 'describe_theme_for_stack', value: 'describe_theme_for_stack' }
    ]}
>
<TabItem value="describe_theme_for_stack">

Retrieves a list that describes the theme for a specified stack. A theme is custom branding that customizes the appearance of the streaming application catalog page.

```sql
SELECT
CreatedTime,
StackName,
State,
ThemeFaviconURL,
ThemeFooterLinks,
ThemeOrganizationLogoURL,
ThemeStyling,
ThemeTitleText
FROM aws.appstream.theme_for_stacks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_theme_for_stack"
    values={[
        { label: 'create_theme_for_stack', value: 'create_theme_for_stack' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_theme_for_stack">

Creates custom branding that customizes the appearance of the streaming application catalog page.

```sql
INSERT INTO aws.appstream.theme_for_stacks (
StackName,
FooterLinks,
TitleText,
ThemeStyling,
OrganizationLogoS3Location,
FaviconS3Location,
region
)
SELECT 
'{{ StackName }}' /* required */,
'{{ FooterLinks }}',
'{{ TitleText }}' /* required */,
'{{ ThemeStyling }}' /* required */,
'{{ OrganizationLogoS3Location }}' /* required */,
'{{ FaviconS3Location }}' /* required */,
'{{ region }}'
RETURNING
Theme
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: theme_for_stacks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the theme_for_stacks resource.
    - name: StackName
      value: "{{ StackName }}"
      description: |
        The name of the stack for the theme.
    - name: FooterLinks
      description: |
        The links that are displayed in the footer of the streaming application catalog page. These links are helpful resources for users, such as the organization's IT support and product marketing sites.
      value:
        - DisplayName: "{{ DisplayName }}"
          FooterLinkURL: "{{ FooterLinkURL }}"
    - name: TitleText
      value: "{{ TitleText }}"
      description: |
        The title that is displayed at the top of the browser tab during users' application streaming sessions.
    - name: ThemeStyling
      value: "{{ ThemeStyling }}"
      description: |
        The color theme that is applied to website links, text, and buttons. These colors are also applied as accents in the background for the streaming application catalog page.
      valid_values: ['LIGHT_BLUE', 'BLUE', 'PINK', 'RED']
    - name: OrganizationLogoS3Location
      description: |
        The organization logo that appears on the streaming application catalog page.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
    - name: FaviconS3Location
      description: |
        The S3 location of the favicon. The favicon enables users to recognize their application streaming site in a browser full of tabs or bookmarks. It is displayed at the top of the browser tab for the application streaming site during users' streaming sessions.
      value:
        S3Bucket: "{{ S3Bucket }}"
        S3Key: "{{ S3Key }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_theme_for_stack"
    values={[
        { label: 'update_theme_for_stack', value: 'update_theme_for_stack' }
    ]}
>
<TabItem value="update_theme_for_stack">

Updates custom branding that customizes the appearance of the streaming application catalog page.

```sql
UPDATE aws.appstream.theme_for_stacks
SET 
StackName = '{{ StackName }}',
FooterLinks = '{{ FooterLinks }}',
TitleText = '{{ TitleText }}',
ThemeStyling = '{{ ThemeStyling }}',
OrganizationLogoS3Location = '{{ OrganizationLogoS3Location }}',
FaviconS3Location = '{{ FaviconS3Location }}',
State = '{{ State }}',
AttributesToDelete = '{{ AttributesToDelete }}'
WHERE 
region = '{{ region }}' --required
AND StackName = '{{ StackName }}' --required
RETURNING
Theme;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_theme_for_stack"
    values={[
        { label: 'delete_theme_for_stack', value: 'delete_theme_for_stack' }
    ]}
>
<TabItem value="delete_theme_for_stack">

Deletes custom branding that customizes the appearance of the streaming application catalog page.

```sql
DELETE FROM aws.appstream.theme_for_stacks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
